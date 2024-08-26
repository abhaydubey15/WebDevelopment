// // let arr=[1,2,3,4,5];

// // let print=function(el)  // el  is a parameter
// // {
// //     console.log(el);
    

// // }

// // // arr.forEach((el)=> {
// // //     console.log(el);
    
// // // }
// // // );


// // // arr.forEach(print);
// // // arr.forEach(function(el) {
// // //     console.log(el);
    
// // // }
// // // );

// // let brr=[
// //     { name:"Abhay",
// //         marks:90

// //     },
// //     {
// //         name:"Shivam",
// //         marks:99

// //     },
// //     {
// //         name:"Vinod",
// //         marks:89

// //     } 

// // ];


// // // 
// // brr.forEach((student)=>
// // {
// //     console.log(student.marks);


    
// // })

// // let num=[1,2,3,4];
// // let double=num.map((el)=>{
// //     return el;


// // });
// // console.log(double);
// //  let crr=[
// //         { name:"Abhay",
// //             marks:90
    
// //         },
// //         {
// //             name:"Shivam",
// //             marks:99
    
// //         },
// //         {
// //             name:"Vinod",
// //             marks:89
    
// //         } 
    
// //     ];

// //     let gpa=crr.map((el)=>{        // map
// //         return  el.marks/10;
// //     })
    
// //     console.log(gpa);
    


//  /// filter
// let arr=[1(ans);
// ,2,3,4,5,6,10,19];
// let ans=arr.filter((el)=>
// {
//     return  el%2==0;//  even numbers
// });
// console.log

// let num=[2,4,6];
// let ans=num.every((el)=>{
//    return el%2==0;
// });

// console.log(ans);


// num=[1,3,5,7];
// let ans=num.every((el)=>{
//    return el%2!=0;
// });

// console.log(ans);


// Some methods

// let arr=[1,3,5,5];
// let ans=arr.some((el)=>(
//      el%2==0));
// console.log(ans);


// let num=[1,3,4,5,6,7,8,1,34];
// let max=-1;
// for(let i=0;i<num.length;i++)
// {
    // if(num[i]>max)
    // {
        // max=num[i];
    // }
// }
// console.log(max);

// let ans=num.reduce((max,el)=>{if(max<el)
// {
//     return el;
// }
// else{
//     return max;
// }
// });
// console.log(ans);

// let num=[10,20,30,40,50 ,70];

// let ans=num.every((el)=>(el%10==0));
// console.log(ans);



// let num=[1,4,,-9,10,11,-4,90,90];

// let ans=num.reduce((min,ele)=>{
// if(min<ele)
// {
//     return min;
// }
// else
// {
//   return min;
// }
// });
// console.log(ans);


// let num=[1,4,-9,10,11,-4,90,90];

// function getmin(num)
// {
//     let ans=num.reduce((min,ele)=>{
//         if(min<ele)
//         {
//             return min;
//         }
//         else
//         {
//           return ele;
//         }
//         });
        
//         return ans;
// }
// console.log(getmin(num));

// function add(a,b=3)
// {
    // return a+b;

// }
// console.log(add(2));
// console.log(add(3,4));
// console.log(add(3));

// let num=[1,2,,3,41,1,2,1,0,8];
// let res=Math.min(...num);
// let result=Math.max(...num);
// console.log(res);
// console.log(result);
// console.log(... num);

// let num=[1,2,3,4,5];
// let newarr=[...num];
// newarr.push(19);
// console.log(... newarr);


//     let str="this is my string ";
//     let st1=[... str];
//     st1.push("q")
//     console.log(st1);
    


// let odd=[1,3,5,7];
// let even=[2,4,6,8];
// let common=[...even,...odd];
// console.log(common);


let data={
    email:"abhaydubey782",
    pass:1234
    };
    // console.log(data);
    
    let copy={...data,id:900,country:"India"}
    // console.log(copy);
    

    let arr=[1,2,3,4,6];
    let obj1={...arr}; // obj---key:val;
    // console.log(obj1);

    let str={..."hello"};
    // console.log(str);
    


    function sum(...args)  // arguments
    { for(let i=0;i<args.length;i++)
    {
        console.log("hello this",args[i]);
        
    }


    }
    // console.log(sum(1 ,2,3));
// ]

// function min(a,b,c,d)
// {
//     console.log(arguments);
    
// }

// console.log(min(1,2,3,4));

// function sum(...args)
// {
//     return args.reduce((sum,el)=>sum+el); 
// }


// function min(...args)
// {
//     return args.reduce((min,ele)=>{
//         if(min>ele)
//         {
//             return ele;
//         }
//         else
//         {
//             return min;
//         }
    // })
// }

// console.log(min(1,2,3,4));


let names=["tony","bruce","peter","steve","magneta"];

// let winner=names[0];
// let runner=names[1];
                               // We can do all by destructuring method
// let secondrunner=names[2];
// let [winner,runner,secondrunner,...others]=names;
// console.log(winner);
// console.log(runner);
// console.log(others);



const stu={
    name:"Abhay",
    age:24,
    class:4,
    subjects:["hindi","english","math","science"],
    username:"abhay@12",
    password:1234,
    // city:"Delhi"
};
// let user=stu.username;//
// let pas=stu.password;
// console.log(user);


// let {username,password}=stu;
let {username :user,password:secret,city:location="Noida"}=stu;
// console.log(user);
// console.log(password);
// console.log(secret);
// console.log(location);



let num=[1,2,3,4,5,6,7];

// let square=num.map((ele)=>ele*ele);
// console.log(square);


// let add=square.reduce((sume,le)=>sume+le,0);
// console.log(add);

// console.log(num.map((num) =>num+5));


// let namesi=["ana","adm","mufasa","nano"];
// console.log(namesi.map((str)=>str.toUpperCase()));



// const doubleans=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ]

// console.log(doubleans([1,2,3],4,5));



let oj={
    name:"Abhay",
    st:123,
    peg:3
};
let oj1={
    name:"ddhay",
    st:23,
    peg:4
}


const mer=(oj,oj1)=>({...oj, ...oj1});
console.log(mer(oj,oj1));


const meg=(obj,oj2)=>({...obj,...oj2});

console.log(meg({a:1,b:3},{b:2,k:4}));







