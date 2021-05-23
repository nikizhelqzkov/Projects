let specialNumber = 0;

const onHover = (element) => {
  if (specialNumber === 0) {
    ++specialNumber;
    let src = element.src;
    src = src.slice(0, src.length - 4);
    src += "-hover.svg";
    element.src = src;
  }
};

const offHover = (element) => {
  if (specialNumber === 1) {
    --specialNumber;
    let src = element.src;
    src = src.slice(0, src.length - 10);
    src+=".svg";
    element.src = src;
  }
};
