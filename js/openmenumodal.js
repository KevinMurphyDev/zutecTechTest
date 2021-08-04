// Get the modal
let getModal = document.getElementById("menuModal");

// Get the button that opens the modal
let btn = document.getElementById("burgerMenu");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

let toggleBurgerMenuIcon = document.getElementById("burgerMenu");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    getModal.style.display = 'block';
    toggleBurgerMenuIcon.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    getModal.style.display = "none";
    toggleBurgerMenuIcon.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == getModal) {
    getModal.style.display = "none";   
  }
}
