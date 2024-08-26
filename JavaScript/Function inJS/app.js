// function hello()
// {
//     console.log("Hello Abhay");
    
// }
// hello();
// hello();
// hello();

// function isadult (age)
// {
//     if(age>18)
//     {
//         console.log("Age is greater then 18");
        
//     }
//     else{
//         console.log("Age is lesser then 18");
        
//     }

// }
// isadult(19);

// function printpoem()
// {
//     console.log(`Twinkle twinkle little star how are wonder like a star`);
    
// }
// printpoem();
// function rolldice()
// {
//     let num=(Math.floor(Math.random()*6)+1);
//     console.log(num)
    
// }
// rolldice();

// function addthreenum(a,b,c)
// {
//     let sum=a+b+c;
//     console.log(sum);
    
// }
// addthreenum(3,4,5);
// addthreenum(1,2,3);
// addthreenum(9,3,8);

// function average(a,b,c)
// {
//     let avg=(a+b+c)/3;
//     console.log(avg);
// }
// average(10,20,30);
// average(3,3,3);

// function mult(n)
// {
//     // for(let i=1;i<=10;i++)
//     // {
//     //     console.log(i*n);
        
//     // }
//     for(let i=n;i<=n*10;i+=n)
//     {
//         console.log(i);
        
//     }
// }
// mult(10);
// mult(20);
// mult(30);

// function average(a,b,c)
// {
//     let avg=(a+b+c)/3;
//     return avg;
// }
// console.log(average(10,20,30));
// console.log(average(5,5,5));
// console.log(average(6,6,6));


// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(sum(1,2),3));

// function adult(age)
// {
//     if(age>18)
//     {
//       return "adult";
        
//     }
//     else{
//       return "No"

//     }
//     console.log("This is line");
    
// }
// adult(19);

// function sumN(n)
// {  sum=0;
//     for(let i=1;i<=n;i++)
//     {
//  sum+=i;
//     }
//     return sum;
// }
// console.log(sumN(5));



// function sumN(n)
// {  let sum=n*(n+1)/2;
//     return sum;
// }
// console.log(sumN(4));

// function strconcat(arr)
// { 
//     let sum="";
// for(let i=0;i<arr.length;i++)
// {
    
//     sum+=arr[i]; 
// }
//   return sum
// }
// console.log(sum);



// let arr=["This","is","new","laptop","which","I","bought","from","Flipkart","Thanks"];
// console.log(strconcat(arr));



    // {
    //    let  a=10;
    // }
    // console.log(a);
    


    // ----Lexical scope child can use parent  but prent can't
    // function outerfun()
    // { let x=5;
    //     let y=6;
       
    //     function innerfun()
    //     { let a=10;
    //         console.log(x);
    //         console.log(y);

            
    //     }
       
    //   innerfun();
     
    // }
    // outerfun();

    
    // let greet="hello";
    // function changegreet()
    // {
    //     let greet="namaste";
    //     console.log(greet);

    //     function innergrret()
    //     {
    //         console.log(greet);
            
    //     }
    //     innergrret();
        
    // }
    // console.log(greet);
    // changegreet();

    // let name="abhay";
    // let x=5;

    // let sum=function(a,b)
    // {
    //     return a+b;
    // }
    // console.log(sum(2,3));
    
    // // nameless function
    // let hello=function()
    // {
    //     console.log("Hello");
        
    // }
    // hello=function()
    // {
    //     console.log("Namaste");
        
    // }
    // hello();

//     let greet=function(){
//         console.log("hello");
        
//     }

//    function multiplegrret(func,n)
//    {
//     for(let i=1;i<=n;i++)
//     {
//          func();
//     }
//    }
// //    multiplegrret(greet,1000);
// multiplegrret(function(){ 
//     console.log("Namste")},7)
// let odd=function(n)
// {
//     console.log(!(n%2)==0);
    
// }
// let even=function(n)
// {
//     console.log((n%2)==0);
    
// }
// odd(5);
// even(4);

// function oddevenfactory(request)
// {
//     if(request=="odd"){
//         let odd=function(n)
// {
//     console.log(!(n%2)==0);
    
// }
// return odd;

//     }
//     else if( request=="even")
//     {

//         let even=function(n)
// {
//     console.log((n%2)==0);
    
// }
// return even;

//     }
//     else{

//         console.log("Wrong Request is send");
        
//     }
// }
//  let func=oddevenfactory("odd")
//  console.log(func(10));
 

// Methods in JavaScript;


// const calculator={
//  num:55,
// add:function(a,b)
// {
//     return a+b;
// },
// sub:function(a,b)
// {
//     return a-b;
// },
// mult:function(a,b)
// {
//     return a*b;
// }


const calculator={
    add(a,b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    },
    mult(a,b)
    {
        return a*b;
    }

};

console.log(calculator.add(2,3));
console.log(calculator.mult(2,3));

// let arr=[11,12,13,14,15];
// let  num=12;
// function largest(arr,num)
// {
//     let ele=[];
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>num)
//     {
//         ele.push(arr[i]);
//     }
//   }
//   return ele;
// }
// console.log(largest(arr,num));


// let num="thisisthis";
// function count(num)
// { let co=0;
//     for(let i=0;i<num.length;i++)
//     {
//         co++;
//     }
//     return co;
// }
// console.log(count(num));
//  let country = ["Australia", "Germany", "United States of America"];
 
//  function count(country)
//  {
    
    
//     let n=country.length;
//     if(n==0)
//     {
//         return 0;
//     }
//     let long=country[0];
//     for(let i=1;i<n;i++)
//     {
//       if(country[i].length>long.length)
//       {
//         long=country[i];
//       }

//     }
//     return long;
//  }
//  console.log(count(country));

 
// function randele(s,e){
//  let num=(Math.floor(Math.random()*(e-s)+1)+s);
//  return num;
 
// }
// console.log(randele(5,10));


// let s="abcdabcdefggh";
// function uniquele(s)
// {
//     let n=s.length;
//     let ans="";

//     for(let i=0;i<n;i++)
//     { if(!ans.includes(s[i]))
//     {
//         ans+=s[i];
//     }
//     }
//     return ans;
// }
// console.log(uniquele(s));


 