export default function initAnimaScroll() {
  const scrollLeft = document.querySelectorAll('[data-scroll="left"]');
  const scrollRight = document.querySelectorAll('[data-scroll="right"]');
  const scrollBottom = document.querySelectorAll('[data-scroll="bottom"]');

  if (scrollLeft.length && scrollRight.length && scrollBottom.length) {
    const parteDaTela = 0.7 * window.innerHeight;

    function handleScroll() {
      scrollLeft.forEach((item) => {
        const distancia = item.getBoundingClientRect().top;
        if (distancia < parteDaTela) {
          item.classList.add("animacaoLeft");
        }
      });
      scrollRight.forEach((item) => {
        const distancia = item.getBoundingClientRect().top;
        if (distancia < parteDaTela) {
          item.classList.add("animacaoRight");
        }
      });
      scrollBottom.forEach((item) => {
        const distancia = item.getBoundingClientRect().top;
        if (distancia < parteDaTela) {
          item.classList.add("animacaoBottom");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
  }
}
