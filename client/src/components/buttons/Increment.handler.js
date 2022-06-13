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