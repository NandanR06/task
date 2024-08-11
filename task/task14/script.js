multiplication = (x, y) => {
    console.log("Multiplication of the two number is = ", x * y);
}
multiplication(5, 8);
//-----------------------------------------------------
division = (x, y) => {
    console.log("division  of the two number is = ", x / y);
}
division(5, 8);

//-------------------------------------------------------------
methodDiv = (a) => {
    let div = document.createElement(a);
    div.style.width = "500px"
    div.style.height = "100px"
    div.style.background = "red";
    document.body.appendChild(div);
}
methodDiv("div")

// let u = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// u.style.background = "green";
// u.style.width = "500px";
// u.style.height = "100px";
// u.li1.innerHTML="nandan"
// u.li2.innerHTML="raghu"

// document.body.appendChild(u);
// document.body.ul.appendChild(li1);
// document.body.ul.prepend(li2);