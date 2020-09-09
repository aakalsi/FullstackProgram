//1-Writing a Calculator class
class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(a,b){return(a+b)}
  sub(a,b){return(a-b)}
  mul(a,b){return(a*b)}
}

let c=new Calculator();
console.log(c.add(1,2));
//2-Writing movie class
class Movie {
  constructor(title,studio,rating) {
    this.title=title;
    this.studio=studio;
    this.rating="PG";
  }
}
