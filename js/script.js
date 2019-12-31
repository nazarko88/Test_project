function doExpand() {
  var wrapper = document.getElementById("wrapper");
  var expandButton = document.getElementById("expand");

 

  if (expandButton.innerHTML === "Expand") {
    expandButton.innerHTML = "Collapse";
  } else {
    expandButton.innerHTML = "Expand";
  }

  wrapper.classList.toggle("collapse");

}





















































// document.getElementById("expand").addEventListener("click", doExpand);
//
// function doExpand() {
// min_max;
// }
//
// document.getElementById("shrink").addEventListener("click", doShrink);
// function doShrink() {
// min_max;
// }


