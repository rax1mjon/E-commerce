document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".loadingOwn").forEach((el) => {
    el.style.display = "none";
  });
});

window.addEventListener("load", () => {
  document.querySelectorAll(".loadingImg").forEach((el) => {
    el.style.display = "none";
  });
});
