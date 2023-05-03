function all_blank() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let date = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let mob = document.getElementById("mob").value;
  if (
    fname == "" ||
    lname == "" ||
    male == false ||
    female == false ||
    date == "" ||
    address == "" ||
    city == "" ||
    mail == "" ||
    pass == "" ||
    cpass == "" ||
    mob == ""
  ) {
    document.getElementById("msg").innerText = "Enter firstname ";
    document.getElementById("msg1").innerText = "Enter last name";
    document.getElementById("msg2").innerText = "Select Gender";
    document.getElementById("msg3").innerText = "Select date ";
    document.getElementById("msg4").innerHTML = "Enter address";
    document.getElementById("msg5").innerHTML = "Select city";
    document.getElementById("msg6").innerHTML = "Enter email";
    document.getElementById("msg7").innerHTML = "Enter Password";
    document.getElementById("msg8").innerHTML = "Enter confirm Password";
    document.getElementById("msg9").innerHTML = "Enter mobile number";
    // document.getElementById("fname").innerHTML =
    //   "<style>#fname{border:2px solid red}</style";
    return false;
  } else {
    document.getElementById("msg").innerText = "";
    document.getElementById("msg1").innerText = "";
    document.getElementById("msg2").innerText = "";
    document.getElementById("msg3").innerText = "";
    document.getElementById("msg4").innerHTML = "";
    document.getElementById("msg5").innerHTML = "";
    document.getElementById("msg6").innerHTML = "";
    document.getElementById("msg7").innerHTML = "";
    document.getElementById("msg8").innerHTML = "";
    document.getElementById("msg9").innerHTML = "";
    return false;
  }
}

// show password function

function show_hide_pass() {
  let pass = document.getElementById("pass");
  let cpass = document.getElementById("cpass");
  if (pass.type == "password" && cpass.type == "password") {
    pass.type = "text";
    cpass.type = "text";
  } else {
    pass.type = "password";
    cpass.type = "password";
  }
}
