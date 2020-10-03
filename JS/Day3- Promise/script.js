//Global variables
let html="";
let appending;

//Use promise for restcountries
function runHttpRequest (url, method){
    // create xmlHttp request
    let request = new XMLHttpRequest();
    //wrap the request in a promise
    let promise = new Promise(function(resolve, reject){    
        request.onreadystatechange = function(){
            // Only run if the request is complete
            if (request.readyState !== 4) return;
            if (request.status>=200 && request.status<=300){
                resolve(request);
            } else {
                reject({
                    status: request.status,
                    statusText: request.statusText,
                });
            }
        }
        //open the request
        request.open(method || 'GET', url,true);
        //sent the request
        request.send();
        }
    );
    return promise;
}

runHttpRequest('https://restcountries.eu/rest/v2/all')
.then(function(data){
    initialize(JSON.parse(data.responseText));
})
.catch(function(err){
    console.log('failure', err);
});

function initialize(restcountries) {
    countries=restcountries;
    countries.forEach(element => {
        html+=`
            <div class="card rounded border-light shadow p-3" style="width: 300px; ">
                    <img src="${element.flag}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">Country: ${element.name}</h5>
                    <p class="card-text">Capital: ${element.capital}</p>
                    <p class="card-text">Region: ${element.region}</p>
                    <p class="card-text">Latitude: ${(+element.latlng[0]).toFixed(2)+'<br> Longitude: '+ (+element.latlng[1]).toFixed(2)}</p>
                    <p class="card-text">Currency Code: ${element.currencies[0].code+'<br> Currency: '+element.currencies[0].name+' <br> Symbol:'+element.currencies[0].symbol}</p>
                </div>
            </div>
        `
    });
        appending = document.querySelector('.wrapper')
        appending.innerHTML=html;

}


