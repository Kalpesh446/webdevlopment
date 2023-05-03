function fname_reg_ex() {
  let fname = document.getElementById("fname").value;
  let reg_ex_fname = /^[a-zA-Z]*$/;
  if (reg_ex_fname.test(fname)) {
    document.getElementById("msg").innerText = "";
    return false;
  } else {
    document.getElementById("msg").innerText = "invalid!!!";
    return false;
  }
}
function lname_reg_ex() {
  let lname = document.getElementById("lname").value;
  let reg_ex_lname = /^[a-zA-Z]*$/;
  if (reg_ex_lname.test(lname)) {
    document.getElementById("msg1").innerText = "";
    return false;
  } else {
    document.getElementById("msg1").innerText = "invalid!!!";
    return false;
  }
}

function address_reg_ex() {
  let address = document.getElementById("address").value;
  if (address.length < 15) {
    document.getElementById("msg4").innerHTML = "Address atlest 15 caharacter";
    return false;
  } else {
    document.getElementById("msg4").innerHTML = "";
    return false;
  }
}

function email_reg_ex() {
  let mail = document.getElementById("mail").value;
  let reg_ex_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg_ex_mail.test(mail)) {
    document.getElementById("msg6").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg6").innerHTML = "Enter Email properly!!!";
    return false;
  }
}

function pass_reg_ex() {
  let pass = document.getElementById("pass").value;
  let reg_ex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
  if (reg_ex.test(pass)) {
    document.getElementById("msg7").innerHTML = "";
  } else {
    document.getElementById("msg7").innerHTML = "Enter Password Properly!!";
  }
}
function cpass_match_pass() {
  let cpass = document.getElementById("cpass").value;
  let pass = document.getElementById("pass").value;
  if (cpass != pass) {
    document.getElementById("msg8").innerHTML = "password does not match";
  } else {
    document.getElementById("msg8").innerHTML = "";
  }
}
function mob_reg_ex() {
  let mob = document.getElementById("mob").value;
  let reg_ex = /^[0-9]*$/;
  if (reg_ex.test(mob)) {
    document.getElementById("msg9").innerHTML = "";
    return false;
  } else {
    document.getElementById("msg9").innerHTML = "alphabet are not allowed";
    return false;
  }
}
function mob_length() {
  let mob = document.getElementById("mob").value;
  if (mob.length < 10) {
    document.getElementById("msg10").innerHTML = "Enter proper mobile no";
    return false;
  } else {
    document.getElementById("msg10").innerHTML = "";
    return false;
  }
}
