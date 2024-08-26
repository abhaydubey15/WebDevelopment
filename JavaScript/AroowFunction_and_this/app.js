// const student={
//     name:"ABHAY",
//      age:23,
//     eng:45,
//    phy:89,
//    math:90,

//    getAvg()
//    {
//     let avg=(this.eng+this.phy+this.math)/3;
//     console.log(this);
    
//     console.log(`${this.name}  got avg marks ${avg}`);
    
//    }
// }
// // student.getAvg();


//  function getAvg()
//    {
//    console.log(this);
   
    
//    }
//    getAvg();


// let a=10



// Try and Catch
// console.log(a);
// console.log("hello");
// try{
//     console.log(a);
// }

// catch(e){
//     console.log("Caught error a is not defined");
//     console.log(e);
    
    
// }
// console.log("hello");

// Arrow function
// 
// const sum=(a,b)=>{
    // console.log(a+b);
    // 
// }
// sum(2,3);
// sum(11,12);

const sum=(a,b)=>(a+b); 
// console.log((sum(7,8)));


// const cube=n=>{
//     return n*n*n;
// }

const cube=n=>n*n*n;

// console.log(cube(5));


// const pow=(a,b)=>{
//     return a**b;

// }

//   console.log(pow(2,3));
         
//   const hello=()=>
//   {
    // console.log("Hello World");
    
//   }
//   hello();


const mult=(a,b)=>(a*b);

// console.log(mult(6,7));

// console.log("HI THERE");

// setTimeout(()=>{console.log("Welcome to new year");
// },5000);

// console.log("HI well good");


// setInterval(() => {
//     console.log("Apna name");
    
    
// },2000);      //It will repeat multiple times



//  id= setInterval(() => {
//     console.log("Apna name");
    
    
// },2000);   
// console.log(id);


// id2= setInterval(() => {
//     console.log("Apna Kaam");
    
    
// },3000);   
   
// console.log(id2);

// const student={
//     name:"Aman",
//     marks:90,
//     prop:this,  // global scope
//     getName:function()
//     {
//         console.log(this);
         
//         return this.name;
//     },
//     getmarks:()=>{
//         console.log(this);  // parent scope  --> window
        
//         return this.marks;
//     },

//     getinfo1:function(){
//    setTimeout(()=>{
//     console.log(this);  // student
    
//    },2000);
//     },
  

//     getinfo2:function(){
//         setTimeout(function(){
//          console.log(this);  // window
         
//         },2000);
//          }  



    



// };
// student.getName();
// student.getmarks();

//  Arrow funstion for square of number

// let sq=n=>(n*n);
// console.log(sq(10));

// let id=setInterval(()=>{
//     console.log("Hellow world");
    

// },2000);

// setTimeout(()=>
// {clearInterval(id)},10000);


// let arrayaveage=(arr)=>{
//     let total=0;
//     for( num of arr)
//     {
//    total+=num;
//     }
//     return total/arr.length;
// }
// let arr=[1,2,3,4,5];
// console.log(arrayaveage(arr));


// let isEven=n=>{
//     if(n%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// };
// console.log(isEven(100));

// let num=4;
// const isEven=(num)=>num%2===0;
// console.log(isEven(7));




// const object={
//     message:'Hello,world!',

//     leogMesage()
//     {
//         console.log(this.message);
        
//     }
// };
    
// setTimeout(object.leogMesage,1000);

let length=4;
function callback(){
    console.log(this.length);
    
}

const object={
    length:5,
    method(callback)
    {
        callback();
    },
};
object.method(callback,1,2);



