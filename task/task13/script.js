const animal = {
    name: "tiger",
    food: "non vegitarian",
    legs: 4,
    live: "forest"
}
console.log(animal);

const car = {
    name: "bmw",
    model: 2024,
    colour: "red",
    number: "ka 14 md 2345"
}
console.log(car);
//---------------------------------------------------------------------------

//duplicate of the string

duplicate = (str) => {
    let name = [], j = 0;
    let val = str.split("")
    console.log(val);
    for (let i = 0; i < val.length; i++) {
        if (val[i] === "m") {
            continue;
        }
        else {
            name[j] = val[i];
            j++;
        }

    }
    console.log(name);

}

duplicate("iam come from bangaluru");
//--------------------------------------------------------------------
//reverce the string

const name = "he is a good boy"
console.log("the string is = ", name);
let subName = name.split("")
let reName = [], j = 0;
for (let i = subName.length; i >= 0; i--) {
    reName[j] = subName[i];
    j++;
}
console.log("reverce of the string is = ", reName.join(""));

higest = (arr) => {
    let index = arr[0], max;
    for (let e of arr) {
        if (e > index) {
            max = e;
            index = max;
        }
    }
    return max;

}


lowest = (arr) => {
    let index = arr[0], min;
    for (let e of arr) {
        if (e <= index) {
            min = e;
            index = min;
        }
    }
    return min;

}
console.log("");
console.log("highest and lowest value in the array");
let arr = [6, 892, 98, 156, 32, 53, 1, 96, 12, 568, 999];
console.log("min element is =", lowest(arr));
console.log("max element is =", higest(arr));
//---------------------------------------------------------------------------



    let array = [6, 892, 98, 568, 999];
    sort=(array)=>{
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    }

console.log("");
console.log("The sort of the array is", sort(array));
//--------------------------------------------------------------------

console.log("");
console.log("removing the element and adding 2 element")
console.log(array);
array.splice(3, 0, 8, 6);
console.log(array);
