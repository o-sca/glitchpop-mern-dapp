export function mintEvent(e) {
  e.preventDefault();
  // + 1 is added into the selected index as it starts at 0
  const numOfMints = document.querySelector("#mint-select").selectedIndex + 1;
  console.log(numOfMints)
};

export function increase(e) {
  e.preventDefault();
  if (document.querySelector("#mint-select").selectedIndex === 2) return;
  document.querySelector("#mint-select").selectedIndex++;
};

export function decrease(e) {
  e.preventDefault();
  if (document.querySelector("#mint-select").selectedIndex === 0) return;
  document.querySelector("#mint-select").selectedIndex--;
};