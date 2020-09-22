let container=document.createElement('div');
container.className="container";
document.body.append(container);

let input=document.createElement('div');
let inputCap=document.createElement('input');
inputCap.id="inpCap";
inputCap.placeholder='enter values';
input.appendChild(inputCap);

let zero=document.createElement('div');
zero.id="zero";
let zeroBtn=document.createElement('button');
zeroBtn.innerText='0';
zero.appendChild(zeroBtn);

let one=document.createElement('div');
one.id="one";
let oneBtn=document.createElement('button');
oneBtn.innerText='1';
one.appendChild(oneBtn);


let two=document.createElement('div');
two.id="two";
let twoBtn=document.createElement('button');
twoBtn.innerText='2';
two.appendChild(twoBtn);

let plus=document.createElement('div');
plus.id="plus";
let plusBtn=document.createElement('button');
plusBtn.innerText='+';
plus.appendChild(plusBtn);

let three=document.createElement('div');
three.id="three";
let threeBtn=document.createElement('button');
threeBtn.innerText='3';
three.appendChild(threeBtn);

let four=document.createElement('div');
four.id="four";
let fourBtn=document.createElement('button');
fourBtn.innerText='4';
four.appendChild(fourBtn);

let five=document.createElement('div');
five.id="five";
let fiveBtn=document.createElement('button');
fiveBtn.innerText='5';
five.appendChild(fiveBtn);

let six=document.createElement('div');
six.id="six";
let sixBtn=document.createElement('button');
sixBtn.innerText='6';
six.appendChild(sixBtn);

let seven=document.createElement('div');
seven.id="seven";
let sevenBtn=document.createElement('button');
sevenBtn.innerText='7';
seven.appendChild(sevenBtn);

let eight=document.createElement('div');
eight.id="eight";
let eightBtn=document.createElement('button');
eightBtn.innerText='8';
eight.appendChild(eightBtn);

let nine=document.createElement('div');
nine.id="nine";
let nineBtn=document.createElement('button');
nineBtn.innerText='9';
nine.appendChild(nineBtn);


let minus=document.createElement('div');
minus.id="minus";
let minusBtn=document.createElement('button');
minusBtn.innerText='-';
minus.appendChild(minusBtn);

let division=document.createElement('div');
division.id="division";
let divisionBtn=document.createElement('button');
divisionBtn.innerText='/';
division.appendChild(divisionBtn);

let multiplication=document.createElement('div');
multiplication.id="multiplication";
let multiplicationBtn=document.createElement('button');
multiplicationBtn.innerText='X';
multiplication.appendChild(multiplicationBtn);

let absolute=document.createElement('div');
absolute.id="absolute";
let absoluteBtn=document.createElement('button');
absoluteBtn.innerText='%';
absolute.appendChild(absoluteBtn);

let equals=document.createElement('div');
equals.id="equals";
let equalsBtn=document.createElement('button');
equalsBtn.innerText='=';
equals.appendChild(equalsBtn);

container.append(input,zero,one,two,plus,three,four,five,minus,six,seven,eight,division,nine,multiplication,absolute,equals);


function addValueToInput(e){
   let x= document.getElementById('inpCap').textContent='Hello';
   console.log(x);
}

document.querySelector('#one').addEventListener('click',addValueToInput);


