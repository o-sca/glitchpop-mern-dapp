export function pendingStatus() {
  document.querySelector("#mint-status").innerHTML = "PENDING...";
};

export function successStatus() {
  document.querySelector("#mint-status").innerHTML = "SUCCESS!";
};

export function errorStatus() {
  document.querySelector("#mint-status").innerHTML = "ERROR!";
};

export function resetStatus() {
  document.querySelector("#mint-status").innerHTML = "MINT NOW";
};