function display() {
    var x = document.getElementById("password");
    var y = document.getElementById("font-change")
    if (x.type === "password") {
        x.type = "text";
        y.className = "far fa-eye-slash pss"
    }
    else {
        x.type = "password";
        y.className = "far fa-eye pss"
    } 
}



function displayConfirm() {
  var x = document.getElementById("confirm-password");
  var y = document.getElementById("font-change-confirm")
  if (x.type === "password") {
      x.type = "text";
      y.className = "far fa-eye-slash pss"
  }
  else {
      x.type = "password";
      y.className = "far fa-eye pss"
  } 
}
