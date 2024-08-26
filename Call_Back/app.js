// function hello()
// {
//     console.log("Inside Demo function");
    
//     console.log("Hello");
    
// }
// function demo()
// {
//     console.log("Calling Hello function");
    
//     hello();
// }
// // hello();
// console.log("Calling demo fun");

// demo();


// function one()
// {
//     return 1;
// }

// function two()
// {
//     return one() +one();

// }
// function three()
// {
//     let ans=two()+one();
//     console.log(ans);
    
// }
// three();

// let a=25;

// console.log(a);
// let b=10;
// console.log(b);

// console.log(a+b);

// setTimeout( ()=>{
//     console.log("Abhay ");
    
// },2000);


// console.log("hello...");





let h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

// setTimeout(()=>{
//     h1.style.color="yellow";
// },5000)


// function change(color,delay,nextcolorchange)
// {
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextcolorchange();  

//     },delay)
  
// }

// change("red",1000,()=>{
//     change("orange",1000,
//         ()=>{
//             change("greenyellow",3000);
//         }
//     );

// });

function change(color,delay)
{
    return  new Promise(( resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
         resolve("color changed")

    },delay);
  
 
    });
  
}


change ("red",1000)
.then(()=>{
    console.log("Red colour was completed!");
    return change("orange",2000);
    
})
.then(()=>{
    console.log("orange color was completed");
    return change ("green",1000);
    
}).then(()=>{
    console.log("Green was completed !");
    return change("blue",1000);
    
}).then(()=>{
    console.log("Blue was completed");
    
})
// change("red",1000);

// change("red",1000,()=>{
//     change("orange",1000,
//         ()=>{
//             change("greenyellow",3000);
//         }
//     );

// });

















// change("orange",2000);
// change("peach",4000);
// change("green",4000);
// setTimeout(change("red"),2000);
// setTimeout(change("green"),3000);
// setTimeout(change("peach"),4000);

// 

// function savetoDB(data,success,failure)
// {
//     let internet=Math.floor(Math.random()*10)+1;
//     if(internet>4)
//     {
//     // console.log("Your data was saved" ,data);
//     success();
//     }
//     else{
//         // console.log("Weak Connection data not saved");   
//         failure();
        
//     }
    
// } 
// savetoDB("abhay",()=>{
//     console.log("Your data was saved");
//     savetoDB("dubey",()=>{
//         console.log("succes 2");  
//         savetoDB("IILM",()=>{
//             console.log("Success data 3 saved");
            

//         },()=>{
//             console.log("Failure 3 ! Weak Connection");
            
//         })  
        
//     },()=>{
//         console.log("failure 2");
        
//     })
// }, 
// ()=>{
//     console.log("Weak Connection data not saved");

// });

// function savetoDB(data)
// {
   
    
//         return new Promise((success,failure)=>{
//             let internet=Math.floor(Math.random()*10)+1;
//             if(internet>4)
//             {
//                 // success();
//                 success("success:data was saved")
//             }
//             else{
//                 failure( "failure : weak connectin");
//             }
//         });
 
    
        
        
    
// } 
//   let request=savetoDB("abhay"); // request = promise object
//   console.log(request);
// request.then(()=>{
 
//     savetoDB("abhay")
//     .then((result)=>{
//       console.log(" Data1 savedpromise was resolved ");
//       console.log( "result",result);
      
//      return  savetoDB("abhay dubey");
//       })
//     // console.log(request); 
//     .then((result)=>{
//         console.log("Data 2 saved");
//         console.log( "result:",result);
        
//          return savetoDB("IILM");
        
//     })
//     .then((result)=>{
//         console.log("DATA 3 SAVED");
//         console.log("result:",result);
        
        
//     })

// .catch( (error)=>{ console.log("Promise was rejected");
//     // console.log(request); 
//     console.log(error );
    
// })

  

