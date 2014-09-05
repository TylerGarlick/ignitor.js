const co = require('co');
const mocha = require('mocha');


mocha.Runnable.prototype.run = function (fn) {
  var self = this,
    ms = this.timeout(),
    start = new Date,
    ctx = this.ctx,
    finished,
    emitted;

  if (ctx) ctx.runnable(this);

  // timeout
  if (this.async) {
    if (ms) {
      this.timer = setTimeout(function () {
        done(new Error('timeout of ' + ms + 'ms exceeded'));
        self.timedOut = true;
      }, ms);
    }
  }

  // called multiple times
  function multiple(err) {
    if (emitted) return;
    emitted = true;
    self.emit('error', err || new Error('done() called multiple times'));
  }

  // finished
  function done(err) {
    if (self.timedOut) return;
    if (finished) return multiple(err);
    self.clearTimeout();
    self.duration = new Date - start;
    finished = true;
    fn(err);
  }

  // for .resetTimeout()
  this.callback = done;

  // async
  if (this.async) {
    try {
      this.fn.call(ctx, function (err) {
        if (err instanceof Error || toString.call(err) === "[object Error]") return done(err);
        if (null != err) return done(new Error('done() invoked with non-Error: ' + err));
        done();
      });
    } catch (err) {
      done(err);
    }
    return;
  }

  if (this.asyncOnly) {
    return done(new Error('--async-only option in use without declaring `done()`'));
  }

  try {
    if (!this.pending) {
      var result = this.fn.call(ctx);
      // This is where we determine if the result is a generator
      if (result && typeof(result.next) == 'function' && typeof(result.throw) == 'function') {
        // Mocha timeout for async function
        if (ms) {
          this.timer = setTimeout(function () {
            done(new Error('timeout of ' + ms + 'ms exceeded'));
            self.timedOut = true;
          }, ms);
        }
        // Use co to run generator to completion
        co(result)(function (err) {
          this.duration = new Date - start;
          done(err);
        });
      } else {
        // Default Mocha handling of sync function
        this.duration = new Date - start;
        fn();
      }
    }
  } catch (err) {
    fn(err);
  }

}