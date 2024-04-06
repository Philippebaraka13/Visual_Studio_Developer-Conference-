

window.addEventListener("load", function() {
   calcCart();
   document.getElementById("regSubmit").onclick = sessionTest;
   document.getElementById("fnBox").onblur = calcCart;
   document.getElementById("lnBox").onblur = calcCart;
   //add code
});

function sessionTest() {
   var confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   } else {
      confSession.setCustomValidity("");
   }
}


function calcCart() {

}

function writeSessionValues() {


}

