//  async function  greet()
// {
//     // abc.abc();
//     // throw "some random error"; 
//   return "hello!";
    
// }
// greet()
// .then((res)=>{
//     console.log("promise was succesfully");
//     console.log(res);
    
    
// })
// .catch((err)=>
// { console.log("Promise was rejected:",err);

// })

// let demo= async()=>{
//     return 5;
// }
// demo();

// function getnumber(){
//     // console.log(5);
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//        console.log(num);
//        resolve();   
//         },1000);
//     });
    
// }
//  async function demo()
// {   await getnumber();
//     await getnumber();
//       await getnumber();

    
    
// }



let h1=document.querySelector("h1");


function change(color,delay)
{
    return  new Promise(( resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*5)+1;
            if(num>3)
            {
                reject("promise rejected")
            }
            h1.style.color=color;
            console.log(`Color  changed to ${color}`);
            
         resolve("color changed")

    },delay);
  
 
    });
  
}

async function demo()
{
    try{
        await change("red",1000);
        await change("orange",1000);
        await change("green",1000);
        await change("blue",1000);
   
    }
    catch(err){
        console.log("error caught ");
        
 console.log(err);
 
    }
    
     let a=5;
     console.log(a);
     console.log("new number =",a+3);
     
     
}