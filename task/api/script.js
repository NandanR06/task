var url = "https://cat-fact.herokuapp.com/facts";
// console.log(url);

// var v= new Promise((result,error)=>{
//     result("fetch")
// })
// console.log(v);
// var fact = document.querySelector("#fact");

// var k = async () => {
//     // console.log("getting data .....")
//     var k = await fetch(url);
//     console.log(k) //json     data in readable form 
// var data = await k.json();
// // console.log(data[4].text);
// // fact.innerHTML=data[2].text;
// for(var i=0;i<4;i++){
// document.querySelector("#dag").innerHTML=data[i].type;
// console.log(data);
// }
// }
// var c = document.querySelector("#cat").addEventListener("click",k)

var val = async () => {
    var k = await fetch(url);
    console.log(k);
    var v = await k.json();
    console.log(v[0].text)
    document.querySelector("#fact").innerHTML = v[4].text;

} 
document.querySelector("#cat").addEventListener("click", val);



function the() {
    fetch(url).then((responce) => {
        return responce.json();
    }).then((v)=>{
         console.log(v);
    })
}
// the();
