function all_blank() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let date = document.getElementById("dob").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  if (
    fname == "" ||
    lname == "" ||
    male == false ||
    female == false ||
    date == "" ||
    address == "" ||
    city == ""
  ) {
    document.getElementById("msg").innerText = "Enter firstname ";
    document.getElementById("msg1").innerText = "Enter last name";
    document.getElementById("msg2").innerText = "Select Gender";
    document.getElementById("msg3").innerText = "Select date ";
    document.getElementById("msg4").innerHTML = "Enter address";
    document.getElementById("msg5").innerHTML = "Select city";
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
    return false;
  }
}
