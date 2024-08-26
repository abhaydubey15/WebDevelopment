// let btn=document.querySelector("button");
// btn.addEventListener("click",async() =>{
//     // console.log("Button added");
//     let fact=await getfact();
//     console.log(fact);
// let p=document.querySelector("#factp");
// p.innerText=fact;
     
// })


// let url="https://catfact.ninja/fact";
// async function getfact(){ 

// try{
//      let res=await axios.get(url);
//     //  console.log(res.data.fact );
//     return res.data.fact;
     

// }
// catch (e){
//     console.log("Error is found:",e);
//     return "No fact found"
    

// }
// }
// // getfact();


//

// let url="https://icanhazdadjoke.com";
// async function getjoke()
// {
//     const config={headers:{ Accept:"application/json"}};
//     try{
//         let res=await axios.get(url,config);
//         console.log(res.data);
        

//     }
//     catch(e)
//     {
//         console.log("Error is ",e);
        
//     }
// }
// getjoke();

let url="http://universities.hipolabs.com/search?name=";


let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    // console.log("Button was clicked");
    console.log(country);
    
let collegedata=  await getcollege(country);
// console.log(collegedata);
show(collegedata);      
}) 

function show(collegedata)
{
    let list=document.querySelector("#list");
    list.innerText="";
    for(college of collegedata)
    {
        console.log(college.name);
        let li=document.createElement("li");
        li.innerText=college.name;
        list.appendChild(li)
        
    }
}

// let country="india";
async function getcollege(country)
{
    try
    {
         let res=await axios.get(url+country);
        //  console.log(res.data);
        return res.data;
         
    }
    catch(e)
    {
        console.log("Error is ",e);
        return [];
        
    }
}
getcollege();