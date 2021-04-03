const panels = document.querySelectorAll(".panel");

function init() {
  panels.forEach((panel) =>
    panel.addEventListener("click", (event) => {
      event.stopPropagation();
      event.target.classList.toggle("open");
    })
  );
}

init();
