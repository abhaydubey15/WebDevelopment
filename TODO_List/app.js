let btn=document.querySelector("button");
let ull=document.querySelector("ul");
let lis=document.querySelector("li");
let inp=document.querySelector("input");



btn.addEventListener("click",function()
{ let item=document.createElement("li");
    item.innerText=inp.value;
    let deletbtn=document.createElement("button");
    deletbtn.innerText="delete";
    deletbtn.classList.add("delete"); 
     console.log( inp.value); 
     item.appendChild(deletbtn); 
     ull.appendChild(item);
     inp.value="";

     
    

});

ull.addEventListener("click",function(event ){
    // console.log(event.target);
     if(event.target.nodeName=="BUTTON")                ///NODENAME KI value  BUTTON K EQUAL HAI ISLIYE YE LIKHA
        {
            // console.log("delete");
            let listitem=event.target.parentElement;
            listitem.remove();
            // console.log(listitem);
            // console.log("delete");
            
            
            
        } 
        
    // console.log("Button Clicked");
    
})



// let btns=document.querySelectorAll(".delete");

// for(debtbn of btns)
// {
//     debtbn.addEventListener("click",function()
// {
// //  console.log("Element Deleted");
// let parent=this.parentElement;
// console.log(parent);
// parent.remove();

 
// }
// )
// }