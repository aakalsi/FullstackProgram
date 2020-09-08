//

var cat = {
 name: 'Fluffy',
 activities: ['play', 'eat cat food'],
 catFriends: [
				 {
				 name: 'bar',
				 activities: ['be grumpy', 'eat bread omblet'],
				 weight: 8,
				 furcolor: 'white'
				 }, 
				 {
				 name: 'foo',
				 activities: ['sleep', 'pre-sleep naps'],
				 weight: 3
				 }
			]
};




//Problem 0 : Part B 

var myCar = {
 	make: 'Bugatti',
 	model: 'Bugatti La Voiture Noire',
 	year: 2019,
 	accidents: [
				 {
					date: '3/15/2019',
				 	damage_points: '5000',
				 	atFaultForAccident: true
				 },
				 {
				 	date: '7/4/2022',
				 	damage_points: '2200',
				 	atFaultForAccident: true
				 },
				 {
				 	date: '6/22/2021',
				 	damage_points: '7900',
				 	atFaultForAccident: true
				 }
				]
};

for(let i=0; i< myCar.accidents.length;i++){
	//1. Loop over the accidents array. Change atFaultForAccident from true to false.
	myCar.accidents[i].atFaultForAccident=false;
	//2. Print the dated of my accidents
	console.log(myCar.accidents[i].date);
}

