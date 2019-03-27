import co from 'co';
import JsonFn from 'json-fn';
import socket from 'socket.io';

export default function (server) {
  const _io = socket(server);
  return new Proxy(_io, {
    get(target, key) {
      if (key === 'on') {
        return function () {
          const _fn = arguments[1];
          if (_fn && _fn.constructor) {
            const fn = function (socket) {
              const _on = socket.on;
              socket.on = function (path, cb) {
                if (cb && cb.constructor && cb.constructor.name === 'GeneratorFunction') {
                  const callback = function (msg) {
                    try {
                      let json = JsonFn.parse(msg, true);
                      co(cb.bind(this, json)).then(() => {
                      }, e => {
                        console.warn(e);
                      });
                    } catch (e) {
                      co(cb.bind(this, msg)).then(() => {
                      }, e => {
                        console.warn(e);
                      });
                    }
                  };

                  _on.bind(socket)(path, callback);
                } else {
                  _on.bind(socket)(path, cb);
                }
              };

              const _emit = socket.emit;
              socket.emit = function (name, result) {
                console.time('send');
                if (typeof result === 'string') {
                  _emit.bind(socket)(name, result);
                } else {
                  _emit.bind(socket)(name, JsonFn.stringify(result));
                }
              };
              _fn.bind(this)(socket);
            };

            arguments[1] = fn;
            target[key](...arguments);
          }
        };
      }

      return target[key];
    }
  });
}
