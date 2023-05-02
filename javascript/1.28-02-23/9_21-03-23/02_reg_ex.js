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
