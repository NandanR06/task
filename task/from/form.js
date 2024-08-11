document.querySelector('#submit').addEventListener('click', form);

function form() {
    var name = document.querySelector('#name').value;
    console.log(name);
    var age = document.querySelector('#age').value;
    var address = document.querySelector('#address').value;
    var Email = document.querySelector('#Email').value;


    var d = validName(name);
    var k = validAge(age);
    var e = validAddress(address);
    var f = validEmail(Email);
    if (d && k && f && e) {

        setTimeout(alert("your form is submited"), 500000);
        var name = document.querySelector('#name').value = "";
        var age = document.querySelector('#age').value = " ";
        var address = document.querySelector('#address').value = " ";
        var Email = document.querySelector('#Email').value = " ";
    }
}
function validName(name) {
    var valid = false;
    if (name.trim() === " ") {

        document.querySelector('#validName').innerHTML = "please enter the valid name";
        valid = false;
    }
    else if (name.trim() === "nandan") {
        document.querySelector('#validName').innerHTML = "please enter the valid name";
        valid = false;
    }
    else {

        valid = true;
    }
    return valid;
}

function validAge(y) {
    var a = false;
    if (y < 18) {
        document.querySelector('#validAge').innerHTML = "enter proper age";
        a = false;
    }
    else {
        a = true;
    }
    return a;
}

function validAddress(z) {
    var c = false;
    if (z === "") {
        document.querySelector('#validAddress').innerHTML = "enter proper address";
        c = false;
    }
    else {
        c = true;
    }
    return c;
}

function validEmail(Email) {
    var valid = false;
    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailRegex.test(Email)) {
        console.log("email is verified");
        valid = true;
    }
    else {
        document.querySelector("#validEmail").innerHTML = "It is not valid*"
        valid = false;
    }
    return valid;

}