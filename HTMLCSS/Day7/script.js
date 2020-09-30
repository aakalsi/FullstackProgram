// Random number generator code

let wrapper=document.createElement('div');
wrapper.className='wrapper';
document.body.append(wrapper);

let container1=document.createElement('div');
container1.className='container1';
wrapper.append(container1);

let inner=document.createElement('div');
inner.id='message';
inner.innerHTML='<p>Generate Random Number</p>';
container1.appendChild(inner);

let btn=document.createElement('button');
btn.className='btn';
btn.textContent='Click Me!!';
container1.appendChild(btn);

let genRandomNumnber=function(){
    let mySet = new Set();
    while(mySet.size<8){
        mySet.add(Math.floor(Math.random()*10))
    }
    let num =Array.from(mySet).join('');
    document.querySelector('#message p').innerText=num;
    document.querySelector('button').textContent='Click Me to generate random number!';
    console.log(num);
}

document.querySelector('button').addEventListener('click',genRandomNumnber);


//Age Calculator code

let container2=document.createElement('div');
container2.className="container2";
wrapper.append(container2);

let calendar=document.createElement('div');
calendar.className="calendar";
container2.append(calendar);

let dateInput=document.createElement('input');
dateInput.id='dateInput'
dateInput.setAttribute('type','date');
dateInput.setAttribute('style','font-size: 20px');
calendar.appendChild(dateInput);

let labelForDateSelector=document.createElement('label');
labelForDateSelector.innerHTML='Know how long have you lived. Enter your Date of Birth: ';
labelForDateSelector.setAttribute('for','dateInput');
document.getElementById('dateInput').insertAdjacentElement('beforebegin',labelForDateSelector);

let btn2=document.createElement('button');
btn2.id='btn2';
btn2.textContent='Click Me!';
container2.appendChild(btn2);

let age=document.createElement('div');
age.id='age';
age.innerText='AGE:'
container2.append(age);

let birthDate =document.getElementById('dateInput').value;


function ageCalculate(){
        let birthDate =document.getElementById('dateInput').value;
        
        let d = new Date(birthDate);

        let mdate = birthDate.toString();
        let yearThen = parseInt(mdate.substring(0,4), 10);
        let monthThen = parseInt(mdate.substring(5,7), 10);
        let dayThen = parseInt(mdate.substring(8,10), 10);
        
        let today = new Date();
        let birthday = new Date(yearThen, monthThen-1, dayThen);
        let differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        let year_age = Math.floor(differenceInMilisecond / 31536000000);
        let day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        
        let month_age = Math.floor(day_age/30);
        
        day_age = day_age % 30;
        
        let tMnt= (month_age + (year_age*12));
        let tDays =(tMnt*30) + day_age;
        console.log(year_age,month_age,day_age);
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
        }
        else {
            document.getElementById("age").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
            + "<br/> or <br/> " 
            + tMnt + " months " + day_age + " days" 
            + "<br/> or <br/>" 
            +  tDays + " days" 
            + "<br/> or <br/>" 
            +  tDays*24 + " hours" 
            + "<br/> or <br/>" 
            +  tDays*24*3600 + " seconds" 
            + "<br/> or <br/>" 
            +  tDays*24*3600*1000 + " miliseconds" ;
        }
}

btn2.addEventListener('click',ageCalculate);