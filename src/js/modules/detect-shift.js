
var callbacks = [];
var isPressed = false;

document.addEventListener('keydown', function (e) {
  if (e.shiftKey && !isPressed) {
    isPressed = e.shiftKey;
    callCallbacks();
  }

  return true;
});

document.addEventListener('keyup', function (e) {
  if (!e.shiftKey && isPressed) {
    isPressed = e.shiftKey;
  }

  return true;
});

function callCallbacks () {
  callbacks.forEach(function (callback) {
    callback();
  });
}

module.exports = {
  bind: function (callback) {
    callbacks.push(callback);
  },
  unbind: function () {

  }
};
