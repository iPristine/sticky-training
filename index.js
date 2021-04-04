const flagToScroll = false;

window.onscroll = (event) => {
  console.log("scroll");

  const elementToScroll = document.getElementById("chekers");
  const wrapperElement = document.getElementById("chekers-wrapper");

  const progress =
    elementToScroll.offsetTop /
    (wrapperElement.offsetHeight - elementToScroll.offsetHeight);

  const cheker1 = document.getElementById("checker1");
  const cheker2 = document.getElementById("checker2");
  const cheker3 = document.getElementById("checker3");

  console.log(progress)
  cheker1.style.backgroundColor =
    progress > 0.2 && progress <= 0.5 ? "green" : "slategrey";
  cheker2.style.backgroundColor =
    progress > 0.5 && progress <= 0.8 ? "green" : "slategrey";
  cheker3.style.backgroundColor = progress > 0.8 ? "green" : "slategrey";
  // elementToScroll.style.position = progress > 0.80 ? 'relative' : 'sticky';
};
