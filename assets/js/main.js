//Lev1_1_js-vertiefung_loops_for-loop
let text = "Hello World "
for (let i = 1; i <= 10; i++) {
    console.log(text + i)
}

//Lev1_2_js-vertiefung_loops
let numArray = []
for (let k = 0; k <= 10; k++) {
    numArray.push(k)
}
console.log(numArray)

//Lev1_4_js-vertiefung_loop
let names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
for (let y = 0; y < names.length; y++) {
    console.log(names[y])
}

//Lev1_6_js-vertiefung_loops_for-loop-array
let retArray = []
for (let p = 1; p <= 100; p++) {
    retArray.push("image_" + p + ".jpg")
}
console.log(retArray)

//Lev1_7_js-vertiefung_loops_do_while
let number = 1
while (number <= 5) {
    console.log("The number is " + number)
    number++
}