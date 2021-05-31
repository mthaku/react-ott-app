export const registerObserver = (ref, setShowImage) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};


export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}