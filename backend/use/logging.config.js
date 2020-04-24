module.exports = function () {
  if (!global.APP_CONFIG.sentryConfig) return;

  const Sentry = require('@sentry/node');
  const {CaptureConsole, Dedupe} = require('@sentry/integrations');

  const {dsn, captureConsoleLevels, environment} = global.APP_CONFIG.sentryConfig;

  const captureConsoleIntegration = Array.isArray(captureConsoleLevels)
      ? new CaptureConsole({levels: captureConsoleLevels})
      : new CaptureConsole();

  Sentry.init({
    dsn,
    integrations: [captureConsoleIntegration, new Dedupe()],
    ...environment && {environment},
  });

  global.cms.socket.on('connect', socket => {
    socket.on('getSentryConfig', callback => callback(global.APP_CONFIG.sentryConfig));
  });
}
