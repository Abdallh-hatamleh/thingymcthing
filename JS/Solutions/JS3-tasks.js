// Task 1
// let saybutton = document.getElementById("say");
// saybutton.onclick = function() {
    
    // }   
    let t1out = document.getElementById("t1out");
    function sayhello(x) {
        y = document.getElementById(x);
        t1out.innerHTML = "Hello,".concat(" ", y.value);
    }
setInterval(function() { sayhello("name") }, 200);

// Task 2
let t2 = document.getElementById("t2");
let t2out = document.getElementById("t2out");
const square = function(x)
{
    return x*x;
}

setInterval(function() { t2out.innerHTML = square(t2.value)}, 200);

//Task 3
let t3_1 = document.getElementById("t3_1");
let t3_2 = document.getElementById("t3_2");
let t3out = document.getElementById("t3out");
const multiply = (x,y) => {
    return x * y; }
setInterval(function() {t3out.innerHTML = multiply(t3_1.value, t3_2.value);},200)

//Task 4
const car = { make : "", model : "", year :"", getCarInfo: function() {return this.make + " , " + this.model + " , " + this.year;} }
let t4_1 = document.getElementById("t4_1");
let t4_2 = document.getElementById("t4_2");
let t4_3 = document.getElementById("t4_3");
let t4out = document.getElementById("t4out");
function carupdate()
{
car.make = t4_1.value;
car.model = t4_2.value; 
car.year = t4_3.value;
t4out.innerHTML = car.getCarInfo();
}
//Task 5
let colors = ["red", "blue", "orange", "orange again", "Orange"];

function iteratearray(x)
{
    for (let i = 0; i < x.length; i++)
        {
            console.log(x[i])
        }
}
let runarray = document.getElementById("runarray");
runarray.onclick = function() { iteratearray(colors)};

//Task 6
let t6 = document.getElementById("t6");
let t6out = document.getElementById("t6out");
function strlen(example)
{
    return example.length;
}
setInterval(function() {t6out.innerHTML = strlen(t6.value)}, 200)

//Task 7
let t7 = document.getElementById("t7");
let t7out = document.getElementById("t7out");
function strup(example)
{
    return example.toUpperCase();
}
setInterval(function() {t7out.innerHTML = strup(t7.value)}, 200)

//Task 8
let t8 = document.getElementById("t8");
let t8out = document.getElementById("t8out");
function strsplit(example, delimiter)
{
    return example.split(delimiter);
}
setInterval(function() {t8out.innerHTML = strsplit(t8.value, ' ')}, 200)
//Done!!