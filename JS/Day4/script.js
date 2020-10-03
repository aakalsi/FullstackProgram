//Global variables
let html="";
let appending;

let container = document.createElement('div');
container.classList.add('container');
let row = document.createElement('div');
row.classList.add('row');
row.classList.add('justify-content-md-center');
container.appendChild(row);
document.body.appendChild(container);


(async function(){
    let response = await fetch('https://restcountries.eu/rest/v2/all');
    let countries = await response.json();
    // console.log(countries);
    initialize(countries);
}
)();

function initialize(restcountries) {
    countries=restcountries;
    countries.forEach(async (element) => {
        html+=`
            <div class="card col-lg-4 col-sm-12 text-white bg-dark mb-3" style="max-width: 20rem;">
                <div class="card-header bg-dark text-white text-center">
                ${element.name}
                </div>
                <div class="card-body text-center ">
                    <img src="${element.flag}" height="200" class="card-img-top" alt="...">
                    <p class="card-text">Capital: ${element.capital}</p>
                    <p class="card-text">Region: ${element.region}</p>
                    <p class="card-text">Latitude: ${(+element.latlng[0]).toFixed(2)+'<br> Longitude: '+ (+element.latlng[1]).toFixed(2)}</p>
                    <p class="card-text">Currency Code: ${element.currencies[0].code}</p>
                    <a href="#0" class="btn btn-primary">Click for Weather</a>
                </div>
            </div>
        `
    });
        appending = document.querySelector('.row')
        appending.innerHTML=html;


        let button = document.querySelectorAll('.btn');
        button.forEach(item => {
            item.addEventListener('click',function(e){
            let t=(e.currentTarget.previousElementSibling.previousElementSibling.innerHTML).split(" ");   
            let lat=parseFloat(t[1]);
            let long=parseFloat(t[3]);
            // console.log(fetchW(lat,long));
            if (e.currentTarget.nextElementSibling){
                e.preventDefault();
                e.currentTarget.nextElementSibling.remove();
                e.currentTarget.innerText='Click for Weather';
            } else {
                e.preventDefault();
                let html2=`<p class="card-text"></p>`
                e.currentTarget.innerText='- Click for Weather';
                e.currentTarget.insertAdjacentHTML('afterend',html2);
                fetchW(lat,long,e.currentTarget.nextElementSibling);
            }
            })
        });
}


function fetchW(lat,long,curr){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=681b19d213b91016e6469412b441c773&units=metric`)
            .then(response => response.json())
            .then(data=> {
                let temp =data['main']['temp']+' °C';
                let desc =data['weather'][0]['description'];
                curr.innerHTML=` ${name} <br> ${temp} <br> ${desc}`;
            })
}



