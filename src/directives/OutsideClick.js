
export default {
  name: 'outsideClick',
  bind: function (el, binding) {
    const listener = function (evt) {
      if (!el.contains(evt.target)) {
        if (typeof binding.value === 'function') {
          binding.value();
        } else {
          // eslint-disable-next-line no-console
          console.error('directive outsideClick only supports function value');
        }
      }
    };

    el.outsideClickListener = listener;
    document.addEventListener('click', listener);
    el.addEventListener('blur', listener);
  },
  unbind(el) {
    const listener = el.outsideClickListener;
    document.removeEventListener('click', listener);
    el.removeEventListener('blur', listener);
  }
};
