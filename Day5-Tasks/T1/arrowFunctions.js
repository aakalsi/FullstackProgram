//1-Print odd numbers in an array
let arr=[10,20,3,100,6,8,11,45,80,30,5,33];
let res= arr.filter(item=>item%2!=0);
console.log("1-odd numbers of an array: "+res);
//3-Sum of all numbers in an array
let sum=arr.reduce(((total,item)=>total+item),0);
console.log("3-sum of all number: "+sum);
//4-Return all the prime numbers in an array
let primes=arr.filter((item)=>{
  for (let i=2;i<item;i++){
    if(item%i===0) return false;
  }
  return true;
});
console.log("4-primes in an array: "+primes);
//5-Return all the palindromes in an array
let palindromes=arr.filter((n)=>{
  n= n+ "";
  let rev = n.split("").reverse().join("");
  if (n==+rev&&n.length>1) return n;
})
console.log("5-Palindromes in an array are: "+palindromes);
//2-Convert all the strings to title caps in a string array
let strArr=["lion","tiger","cat","dog","zebra"];
let resStr=strArr.map(str=>str.toUpperCase());
console.log("2-Array elements converted to caps: "+resStr);
