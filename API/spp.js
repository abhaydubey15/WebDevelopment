// let JsonData = '{"fact": "It is estimated that cats can make over 60 different sounds.", "length": 60}';

// let jdata='{ "fact": "A cat has more bones than a human being; humans have 206 and the cat has 230 bones.","length": 8}';
// // console.log(JsonData);

// let valid2=JSON.parse(jdata);

// let valid=JSON.parse(JsonData);
// console.log(valid);
// console.log(valid2 );



// let student={
//     name:"abhay",
//     marks:89
// };
// JSON.stringify(student);



let url="https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{ 

    // console.log(response);
    // console.log(response.json());
    // response.json().then((data)=>{
    //     console.log(data);
        
    // })
//     return response.json();

    
    
// })
// .then((data)=>{
//     console.log( "data 1 : ", data.fact);
//     return fetch(url);
    
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log( "data 2 is :",data2.fact);
    
// })
// .catch((err)=>
// {
//     console.log(err);
    
// });


async function getfact() 
{

    try{
        let res= await fetch(url);
        let data= await  res.json();
        console.log(data.fact );
        console.log(data.length );

        let res2= await fetch(url);
        let data2= await  res2.json();
        console.log(data2.fact );
        console.log(data2.length );

    }
    catch(e){
    console.log(`Error is :${e}`);
    
    }
 
  
}
getfact();
