if (window.ResizeObserver) {
  // basic debouncer from https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      window.clearTimeout(inDebounce);
      inDebounce = window.setTimeout(() => func.apply(context, args), delay);
    };
  };

  const callback = entries => {
    entries.forEach(({ target }) => {
      const { scrollWidth, scrollHeight, clientWidth, clientHeight } = target;

      if (scrollWidth > clientWidth || scrollHeight > clientHeight) {
        target.tabIndex = 0;
        target.setAttribute('role', 'group');
        target.setAttribute('aria-label', 'Preformatted text that overflows visually');
      } else {
        ['tabindex', 'role', 'aria-label'].forEach(attr => target.removeAttribute(attr));
      }
    });
  };

  const resizeObserver = new ResizeObserver(debounce(callback, 250));

  document.querySelectorAll('pre').forEach(pre => resizeObserver.observe(pre));
}