
var worldData = {
    USA: {
        California: ["Los Angeles", "San Diego", "Sacramento"],
        Texas: ["Houston", "Austin"],
        Florida: ["Miami", "Orlando", "Tampa"],
    },
    India: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        TamilNadu: ["Chennai", "Madurai"],
        Karnataka: ["Bangalore", "Mangalore"],
    },
    Canada: {
        Alberta: ["Calgary", "Edmonton", "Red Deer"],
        BritishColumbia: ["Vancouver", "Kelowna"],
        Manitoba: ["Winnipeg", "Brandon"],
    },
    Germany: {
        Bavaria: ["Munich", "Nuremberg"],
        NorthRhine: ["Cologne", "Düsseldorf"],
    },
};
window.onload = function () {
    var countyList = document.getElementById("countyList"),
        stateList = document.getElementById("stateList"),
        cityList = document.getElementById("cityList");
    for (var country in worldData) {
        countyList.options[countyList.options.length] = new Option(country, country);
    }
    countyList.onchange = function () {
        stateList.length = 1;
        cityList.length = 1;
        if (this.selectedIndex < 1) return;
        for (var state in worldData[this.value]) {
            stateList.options[stateList.options.length] = new Option(state, state);
        }
    };
    countyList.onchange();
    stateList.onchange = function () {
        cityList.length = 1;
        if (this.selectedIndex < 1) return;
        var city = worldData[countyList.value][this.value];
        for (var i = 0; i < city.length; i++) {
            cityList.options[cityList.options.length] = new Option(city[i], city[i]);
        }
    };
};

var userDataList=[];
var isEdit = false;
var selectedRow=null;
async function getData() {
    let request= await fetch('https://5f7aff3940abc60016472a9a.mockapi.io/api/users')
    let data = await request.json();
    userDataList=data;
    // console.log(data);
    populateData(data);
}

function populateData(data){
    document.querySelector('tbody').innerHTML="";
    data.forEach(element => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        tdId.innerHTML=element.id;
        let tdName = document.createElement('td');
        tdName.innerHTML=element.name;
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML=element.email;
        let tdPassword = document.createElement('td');
        tdPassword.innerHTML=element.password;
        let tdCountry = document.createElement('td');
        tdCountry.innerHTML=element.country;
        let tdState = document.createElement('td');
        tdState.innerHTML=element.state;
        let tdCity = document.createElement('td');
        tdCity.innerHTML=element.city;
        let tdAddressLine1 = document.createElement('td');
        tdAddressLine1.innerHTML=element.addressLine1;
        let tdAddressLine2 = document.createElement('td');
        tdAddressLine2.innerHTML=element.addressLine2;
        let tdGender = document.createElement('td');
        tdGender.innerHTML=element.gender;
        let tdMaritalStatus = document.createElement('td');
        tdMaritalStatus.innerHTML=element.maritalStatus;
        let tdFavFood = document.createElement('td');
        tdFavFood.innerHTML=element.favFood;
        let tdFavColor = document.createElement('td');
        tdFavColor.innerHTML=element.favColor;
        let b1Div=document.createElement('div');
        b1Div.classList.add('d-inline');
        let tdButton1= document.createElement('button')
        tdButton1.innerHTML='edit';
        tdButton1.setAttribute('onclick','getRow('+element.id+')')
        tdButton1.classList.add('btn','btn-secondary');
        let b2Div=document.createElement('div');
        b2Div.classList.add('d-inline');
        let tdButton2= document.createElement('button')
        tdButton2.innerHTML='delete';
        tdButton2.setAttribute('onclick','deleteRow('+element.id+')')
        tdButton2.classList.add('btn','btn-secondary');
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPassword);
        tr.appendChild(tdCountry);
        tr.appendChild(tdState);
        tr.appendChild(tdCity);
        tr.appendChild(tdAddressLine1);
        tr.appendChild(tdAddressLine2);
        tr.appendChild(tdGender);
        tr.appendChild(tdMaritalStatus);
        tr.appendChild(tdFavFood);
        tr.appendChild(tdFavColor);
        tr.appendChild(b1Div);
        b1Div.appendChild(tdButton1);
        tr.appendChild(b2Div);
        b2Div.appendChild(tdButton2);
        document.querySelector('tbody').appendChild(tr);
    });


}

async function deleteRow(id){
    var confirmDeletion=confirm('Are you sure you would like to delete the row?');
    if(confirmDeletion){
        var deleteRow = await fetch('https://5f7aff3940abc60016472a9a.mockapi.io/api/users/'+id,{
            method: 'DELETE'
        });
        await deleteRow.json();
        getData();
    }
}

function getRow(id){
    // console.log(userDataList[id-1]);
    document.querySelector('#name').value=userDataList[id-1].name;
    document.querySelector('#email').value=userDataList[id-1].email;
    document.querySelector('#password').value=userDataList[id-1].password;
    document.querySelector('#countyList').value=userDataList[id-1].country;
    document.querySelector('#stateList').value=userDataList[id-1].state;
    document.querySelector('#cityList').value=userDataList[id-1].city;
    document.querySelector('#addressline1').value=userDataList[id-1].addressLine1;
    document.querySelector('#addressline2').value=userDataList[id-1].addressLine2
    if (userDataList[id-1].gender==='Male'){
        document.querySelector('#male').checked=true;
    } else {
        document.querySelector('#female').checked=true;
    }
    if (userDataList[id-1].maritalStatus==='Single'){
        document.querySelector('#single').checked=true;
    } else {
        document.querySelector('#married').checked=true;
    }
    document.querySelector('#favFood').value=userDataList[id-1].favFood;
    document.querySelector('#favColor').value=userDataList[id-1].favColor;
    isEdit=true;
    selectedRow=userDataList[id -1].id;
}

async function addData(){
        var single=document.querySelector('#single');
        var married=document.querySelector('#married');
        var selectedMaritalStatus;
        if (!!single.checked){
            selectedMaritalStatus= single.value;
        } else {
            selectedMaritalStatus= married.value;
        }  
        var male= document.querySelector('#male');
        var female= document.querySelector('#female');
        var genderStatus;
        if (!!male.checked){
           genderStatus=male.value;
        }else{
            genderStatus=female.value;
        }
    var data={
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        country: document.querySelector('#countyList').value,
        state: document.querySelector('#stateList').value,
        city: document.querySelector('#cityList').value,
        addressLine1: document.querySelector('#addressline1').value,
        addressLine2: document.querySelector('#addressline2').value,
        gender: genderStatus,
        maritalStatus: selectedMaritalStatus,
        favFood:document.querySelector('#favFood').value,
        favColor: document.querySelector('#favColor').value,
    }
    if (!isEdit){
        var postData= await fetch ('https://5f7aff3940abc60016472a9a.mockapi.io/api/users',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } else{
        var postData= await fetch ('https://5f7aff3940abc60016472a9a.mockapi.io/api/users/'+ selectedRow,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        isEdit=false;
        selectedRow=null;
    }
    document.querySelector('#name').value='';
    document.querySelector('#name').focus();
    document.querySelector('#email').value='';
    document.querySelector('#password').value='';
    document.querySelector('#countyList').value='';
    document.querySelector('#stateList').value='';
    document.querySelector('#cityList').value='';
    document.querySelector('#addressline1').value='';
    document.querySelector('#addressline2').value='';
    document.querySelector('#favFood').value='';
    document.querySelector('#favColor').value='';
    var res= await postData.json();
    // console.log(res);
    getData();
}

getData();