
let wrapper=document.createElement('div');
wrapper.className="wrapper";
document.body.append(wrapper);

let container=document.createElement('div');
container.className="container";
wrapper.append(container);

let display=document.createElement('div');
display.className='display';
container.append(display);

//to store the previous input value
let inp2=document.createElement('div');
inp2.className='inp2';
display.appendChild(inp2);
let inpPreviousValue=document.createElement('input');
inpPreviousValue.id="inpPreviousValue";
inpPreviousValue.placeholder='display';
inp2.appendChild(inpPreviousValue);

//to store the current input value
let inp=document.createElement('div');
inp.className='inp';
display.appendChild(inp);
let inputCurrentValue=document.createElement('input');
inputCurrentValue.id="inpCurrentValue";
inputCurrentValue.placeholder='enter values';
inp.appendChild(inputCurrentValue);


let zeroBtn=document.createElement('button');
zeroBtn.innerText='0';
zeroBtn.className='number';
container.appendChild(zeroBtn);


let oneBtn=document.createElement('button');
oneBtn.innerText='1';
oneBtn.className='number';
container.appendChild(oneBtn);


let twoBtn=document.createElement('button');
twoBtn.innerText='2';
twoBtn.className='number';
container.appendChild(twoBtn);

let plusBtn=document.createElement('button');
plusBtn.className='operation';
plusBtn.innerText='+';
container.appendChild(plusBtn);


let threeBtn=document.createElement('button');
threeBtn.className='number';
threeBtn.innerText='3';
container.appendChild(threeBtn);


let fourBtn=document.createElement('button');
fourBtn.className='number';
fourBtn.innerText='4';
container.appendChild(fourBtn);


let fiveBtn=document.createElement('button');
fiveBtn.className='number';
fiveBtn.innerText='5';
container.appendChild(fiveBtn);


let sixBtn=document.createElement('button');
sixBtn.className='number';
sixBtn.innerText='6';
container.appendChild(sixBtn);


let sevenBtn=document.createElement('button');
sevenBtn.className='number';
sevenBtn.innerText='7';
container.appendChild(sevenBtn);


let eightBtn=document.createElement('button');
eightBtn.className='number';
eightBtn.innerText='8';
container.appendChild(eightBtn);

let nineBtn=document.createElement('button');
nineBtn.className='number';
nineBtn.innerText='9';
container.appendChild(nineBtn);



let minusBtn=document.createElement('button');
minusBtn.className='operation';
minusBtn.innerText='-';
container.appendChild(minusBtn);

let divisionBtn=document.createElement('button');
divisionBtn.className='operation';
divisionBtn.innerText='/';
container.appendChild(divisionBtn);


let multiplicationBtn=document.createElement('button');
multiplicationBtn.className='operation';
multiplicationBtn.innerText='X';
container.appendChild(multiplicationBtn);


let absoluteBtn=document.createElement('button');
absoluteBtn.className='operation';
absoluteBtn.innerText='%';
container.appendChild(absoluteBtn);


let equalsBtn=document.createElement('button');
equalsBtn.className='operation';
equalsBtn.id='equals';
equalsBtn.innerText='=';
container.appendChild(equalsBtn);

// container.append(zero,one,two,plus,three,four,five,minus,six,seven,eight,division,nine,multiplication,absolute,equals);

let c=0;//to keep track of equals button press

const numberButtons = document.querySelectorAll(".number")
for (const button of numberButtons) {
   button.addEventListener('click', function(event) {
      let sendInp = document.getElementById('inpCurrentValue');
      if (+c===0){
         sendInp.value+=event.target.textContent;
      } else {
         document.getElementById('inpCurrentValue').value='';
         document.getElementById('inpPreviousValue').value='';
         c=0;
         sendInp.value+=event.target.textContent;
      }
  })
}

const operationButtons = document.querySelectorAll(".operation")
for (const button of operationButtons) {
   button.addEventListener('click', function(event) {
      let preVal1,prevVal2,sum;
      let getInp = document.getElementById('inpCurrentValue');
      if (event.target.textContent!='=' && document.getElementById('inpPreviousValue').value===''){
        preVal1= document.getElementById('inpPreviousValue');
        preVal1.value=getInp.value+' '+event.target.textContent;
        getInp.value='';
      } else if (event.target.textContent!='=' && document.getElementById('inpPreviousValue').value!=''){
         let preValInt=document.getElementById('inpPreviousValue').value.split(' ');
         console.log(preValInt);
         if (event.target.textContent==='+'){
            if (+c===0){
               document.getElementById('inpPreviousValue').value=parseFloat(preValInt[0]) + parseFloat(document.getElementById('inpCurrentValue').value)+' '+event.target.textContent;
            } else {
               document.getElementById('inpPreviousValue').value=parseFloat(document.getElementById('inpCurrentValue').value)+' '+event.target.textContent;
            }
         } else if (event.target.textContent==='-'){
            document.getElementById('inpPreviousValue').value=parseFloat(preValInt[0]) - parseFloat(document.getElementById('inpCurrentValue').value)+' '+event.target.textContent;        
         }
         getInp.value='';
       } 
      if(event.target.textContent==='='&& +c===0) {
        let preValInt=document.getElementById('inpPreviousValue').value.split(' ');
        prevVal2 = document.getElementById('inpPreviousValue').value+=' '+getInp.value;
        if (preValInt[1]==='+'){
            document.getElementById('inpCurrentValue').value=parseFloat(preValInt[0])+ parseFloat(document.getElementById('inpCurrentValue').value);
        } else if (preValInt[1]==='-'){
         document.getElementById('inpCurrentValue').value=parseFloat(preValInt[0]) - parseFloat(document.getElementById('inpCurrentValue').value);
        }
        c=1;
      }

   })
}
