export default function initMenuDropdown() {
  const li = document.querySelector('[data-menu="dropdown"]');
  const dropdown = document.querySelector("[data-dropdown]");

  if (li && dropdown) {
    function handleMenu(event) {
      event.preventDefault();
      if (!dropdown.classList.contains("ativo")) {
        dropdown.classList.add("ativo");
        outsideClick();
      }
    }

    function outsideClick() {
      const html = document.documentElement;
      function handleClick(event) {
        if (event.target !== dropdown) {
          dropdown.classList.remove("ativo");
          html.removeEventListener("click", handleClick);
        }
      }
      setTimeout(() => {
        html.addEventListener("click", handleClick);
      });
    }

    li.addEventListener("click", handleMenu);
  }
}
