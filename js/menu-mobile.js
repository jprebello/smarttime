export default function initMenuMobile() {
  const botao = document.querySelector('[data-menu="botao"]');
  const menu = document.querySelector('[data-menu="mobile"]');

  if (botao && menu) {
    function showMenu() {
      if (!menu.classList.contains("ativo")) {
        menu.classList.add("ativo");
        botao.classList.add("ativo");
        hiddenScroll();
        hiddenMenu();
      }
    }

    function hiddenMenu() {
      const html = document.documentElement;
      function outsideClick(event) {
        if (!menu.contains(event.target)) {
          menu.classList.remove("ativo");
          botao.classList.remove("ativo");
          showScroll();
          html.removeEventListener("click", outsideClick);
        }
      }
      setTimeout(() => {
        html.addEventListener("click", outsideClick);
      });
    }

    function hiddenScroll() {
      if (menu.classList.contains("ativo")) {
        document.documentElement.style.overflow = "hidden";
      }
    }

    function showScroll() {
      if (!menu.classList.contains("ativo")) {
        document.documentElement.style.overflow = "auto";
      }
    }

    botao.addEventListener("click", showMenu);
  }
}
