module.exports = function () {
  if (!global.APP_CONFIG.sentryConfig) return;

  const Sentry = require('@sentry/node');
  const {CaptureConsole} = require('@sentry/integrations');

  const {dsn, captureConsoleLevels, environment} = global.APP_CONFIG.sentryConfig;

  // retain original console functions
  const _console = {};
  captureConsoleLevels.forEach(level => _console[level] = console[level]);

  const captureConsoleIntegration = Array.isArray(captureConsoleLevels)
      ? new CaptureConsole({levels: captureConsoleLevels})
      : new CaptureConsole();

  Sentry.init({
    dsn,
    integrations: [captureConsoleIntegration],
    normalizeDepth: 10,
    ...environment && {environment},
  });

  global.cms.socket.on('connect', socket => {
    socket.on('getSentryConfig', callback => callback(global.APP_CONFIG.sentryConfig));
  });

  // Add tagging capabilities for console functions
  // NOTE: substitution for console functions are not yet supported
  if (Array.isArray(captureConsoleLevels)) {
    captureConsoleLevels.forEach(level => {
      if (typeof console[level] !== 'function') return;

      console[level] = new Proxy(console[level], {
        apply(target, thisArg, argArray) {
          const firstArg = argArray[0];
          const secondArg = argArray[1];

          // Example of adding tags: console.debug('sentry:store=test store,b=2,c=3', 'log here')

          if (firstArg && typeof firstArg === 'string' && firstArg.startsWith('sentry:')) {
            let tags = firstArg.slice('sentry:'.length);

            if (tags.length > 0) {
              tags = tags.split(';').reduce((tagsObj, keyValuePair) => {
                const [tag, value] = keyValuePair.split('=');
                tagsObj[tag] = value;
                return tagsObj;
              }, {});

              if (tags && typeof tags === 'object' && Object.keys(tags).length > 0) {
                Sentry.withScope(function (scope) {
                  for (const key in tags) {
                    if (key.startsWith('extra:')) {
                      const extraKey = key.slice('extra:'.length);
                      const extraValue = tags[key];
                      scope.setExtra(extraKey, extraValue);
                      delete tags[key];
                    }
                  }

                  scope.setTags(tags);
                  scope.setLevel(level);
                  Sentry.captureMessage(secondArg);
                });
                return _console[level].apply(thisArg, argArray.slice(1));
              }

              return target.apply(thisArg, argArray.slice(1));
            }
          }

          return target.apply(thisArg, argArray);
        }
      })
    });
  }
}
