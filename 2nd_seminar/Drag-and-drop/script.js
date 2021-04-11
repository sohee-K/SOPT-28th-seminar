const buckets = document.querySelectorAll(".bucket");
const cat = document.getElementById("cat");

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const imageID = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(imageID));
}

buckets.forEach((bucket) => addEventListener("dragover", allowDrop));
buckets.forEach((bucket) => addEventListener("drop", drop));
cat.addEventListener("dragstart", drag);
