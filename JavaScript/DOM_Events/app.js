//  let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick= function () {
//     alert("Button was Clicked");
    
// }


// let btns=document.querySelectorAll("button");
// for(btn of  btns )
// { 
    
// //     btn.onclick=sayhello;
// //  btn.onclick=sayName;


// // btn.addEventListener( "click", sayhello);
// // btn.addEventListener( "click", sayName);

// btn.addEventListener("dblclick",function()
// {
//     console.log("You double Clicked Me!");
    
// })


//     // btn.onmouseenter=function()
//     // {
//     //     console.log("You entered a button");
        
//     // }
// }


// function sayhello(){
//      alert("Hello!");
// }


// function sayName(){
//     alert("Apna Name!");
// }


// btn.onclick=sayhello;



// Generate the Random color



// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//    let h3=document.querySelector("h3");
//    let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomColor;
//     console.log("Color Updated ");
    
    
// });



// function getRandomColor()
// {
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb( ${red},${green},${blue})`;
//     return color;
// }



// l    

let btn=document.querySelector("button");
// let para=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// btn.addEventListener("click",changeColor
// {
//     // console.dir(this.innerText);
//     // this.style.backgroundColor="pink";
    
// });


// btn.addEventListener("click",changeColor );

// para.addEventListener("click",changeColor);
    // console.dir(this.innerText);
    // this.style.backgroundColor="purple";
    // );

// h1.addEventListener("click",changeColor

    
    // console.dir(this.innerText);
    // this.style.backgroundColor="yellow";
// );

// h3.addEventListener("click",changeColor

    // console.dir(this.innerText);
    // this.style.backgroundColor="orange";
    
// );

// function changeColor()
// {
//     console.dir(this.innerText);
//     this.style.backgroundColor="pink";

// }

// btn.addEventListener("click",function(event){
//     console.log(event);
    
//     console.log("button Clicked");
    
// })

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
    // console.log("key ",event.key);
    // console.log("key ",event.code);
    
    // console.log("code=" ,event.code );
    // if(event.code=="KeyU")
    // {
    //     console.log("Character Moves farward");
        
    // }
    // else if(event.code=="ArrowUp") 
    //     {
    //         console.log("Character Moves backrward");
            
    //     }
    //     else if(event.code=="ArrowLeft")
    //         {
    //             console.log("Character Moves left");
                
    //         }
    //         else if(event.code=="ArrowRight")
    //             {
    //                 console.log("Character Moves right");
                    
    //             }
    
    
    // console.log(event);
    
    // console.log("key was pressed");
    
// })

// inp.addEventListener("keyup",function(){
//         console.log("key was released ");
        
//     })


// let form=document.querySelector("form");
// form.addEventListener ("submit",function(event){
    // event.preventDefault();
    // alert("Form Submitted") 
// 
    // let user=document.querySelector("#user");
    // let pass=document.querySelector("#password");
    // console.dir(user.value);
    // console.dir(pass .value);
    // alert(`Hi ${user.value} ,`)



    // console.dir(form);

    // let user=this.elements[0];
    // let pass=this.elements[1];

    // console.dir(user.value);
    // console.dir(pass .value);
    
    
// });

// let form=document.querySelector("form");
// form.addEventListener ("submit",function(event){
//     event.preventDefault(); 
// })

// let user=document.querySelector("#user");
// user.addEventListener("change",function(event)
// {
    
//   console.log("Change event ");
//   console.log("final value =",this.value);
  
  
// });
// user.addEventListener("input",function(event)
// {
    
//   console.log("Input Change");
//   console.log("final value =",this.value);
  
  
// })

let inp=document.querySelector("#text");
let p=document.querySelector("p");


inp.addEventListener("input",function(){ 
    console.log(inp.value);
    p.innerText=inp.value;
    
})

