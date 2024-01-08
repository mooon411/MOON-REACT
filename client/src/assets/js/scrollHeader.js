const initScrollHeader = () => {
  let didScroll = false;
  let lastScrollTop = 0;
  const delta = 5;
  const header = document.getElementById("myHeader");
  const navbarHeight = header.offsetHeight;
  const menuCheckbox = document.getElementById("menu");

  const onScroll = () => {
    didScroll = true;
  };

  window.addEventListener("scroll", onScroll);

  const scrollInterval = setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  const hasScrolled = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      header.classList.remove("nav-down");
      header.classList.add("nav-up");
      // 스크롤 시 checkbox 체크 해제
      menuCheckbox.checked = false;
    } else {
      if (st + window.innerHeight < document.documentElement.scrollHeight) {
        header.classList.remove("nav-up");
        header.classList.add("nav-down");
      }
    }

    lastScrollTop = st;
  };

  const cleanup = () => {
    window.removeEventListener("scroll", onScroll);
    clearInterval(scrollInterval);
  };

  return cleanup;
};

export function ScrollHeader() {
  const cleanup = initScrollHeader();
  return cleanup;
}
