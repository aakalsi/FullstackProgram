//creating the main container DIV

let container=document.createElement("div");
container.classList.add("container","m-5");


document.body.append(container);//appending the container to body

//creating the first row inside the main div
let row=document.createElement("div");
row.className="row";
row.classList.add('class','no-gutters')
container.append(row);//appending the row to the container div

//creating first column in the first row
let col1=document.createElement("div");
col1.className="col-12";

// col1.classList.add('bg-primary','m-5');

//creating a form element inside the first column
let formGroup=document.createElement("div");
formGroup.setAttribute("class","form-group");
col1.append(formGroup);

let input=document.createElement('input');
input.setAttribute("type","text");
input.setAttribute("placeholder","enter values");
input.setAttribute("id","inp");
input.className="form-control";
formGroup.append(input);

let col2=document.createElement("div");
col2.className=("col");

let btnPlus=document.createElement("button");
btnPlus.classList.add("btn", "btn-primary", "btn-block");
btnPlus.innerText="+";
btnPlus.id="btnPlus";
col2.append(btnPlus);

let col3=document.createElement("div");
col3.className=("col");

let btnMinus=document.createElement("div");
btnMinus.classList.add("btn", "btn-secondary", "btn-block");
btnMinus.innerText="-";
col3.append(btnMinus);

let col4=document.createElement("div");
col4.className=("col");

let btnDivision=document.createElement("div");
btnDivision.classList.add("btn", "btn-success", "btn-block");
btnDivision.innerText="/";
col4.append(btnDivision);

let col5=document.createElement("div");
col5.className=("col");

let btnModulus=document.createElement("div");
btnModulus.classList.add("btn", "btn-info", "btn-block");
btnModulus.innerText="%";
col5.append(btnModulus);

let col6=document.createElement("div");
col6.className=("col");

let equals=document.createElement("div");
equals.classList.add("btn", "btn-warning", "btn-block");
equals.innerText="=";
col6.append(equals);

let col7=document.createElement("div");
col7.className=("col");

let clear=document.createElement("div");
clear.classList.add("btn", "btn-dark", "btn-block");
clear.innerText="clr";
col7.append(clear);

row.append(col1,col2,col3,col4,col5,col6,col7);


let s=document.getElementById('btnPlus');
s.addEventListener('click',function(){
console.log('add event listener');
})


let a=document.querySelector('#inp');

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}    

a.addEventListener('keypress',isNumber);

console.log(a);