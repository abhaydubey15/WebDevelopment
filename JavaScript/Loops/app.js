
// let num=[1,"Abhay","Dubey",12.22,"Vish"];
// for(let i=0;i<num.length;i++)
// {
//     console.log(num[i]);

// }

// print all odd  number  1  to  15

// for(let i=1;i<=15;i+=2)
// {
//     console.log(i);
    
// }

// for(let i=1;i<=15;i++)
// {
//     if(i%2!=0)
//     {
//         console.log(i);
        
//     }
// }

// Print all the even values in 1 to 15

// for(let i=2;i<=10;i+=2)
// {
//     console.log(i);
    
// }
// console.log('\n');

//  for(let i=1;i<=10;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
        
//     }
//  }

// for(let i=1; i<10;i++)
// {
//     console.log(i);
    
// }

// Multiplication of 5

// let ans=5;
// for(let num=5;num<=50;num+=5)
// {
//     console.log(num);
    
// }
// for(let i=1;i<=10;i++)
//     {
//         console.log(ans*i);
        
//     }
// let n=prompt("Enter number");
// n=parseInt(n);
// let n=5;
// for(let i=n;i<=n*10;i+=n)
// {
//     console.log(i);
    
// }


// for(let i=1;i<=3;i++)
// {
//     console.log(`outer loop ${i}`);
    
//     for(let j=1;j<=3;j++)
//     {  
//         console.log(j);
//         // console.log(`inner loop ${j}`);
        
//     }
// }

// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
    
// }

// let fav="Avatar";
// let guess=prompt("Guess my fav movie")
// while((guess!=fav) &&guess!="quit")
// {
//     console.log("You are wrong");
//      guess=prompt("wrong guess. please try again")
    
// }
// if(guess==fav)
// {
//     console.log("Congratulation");
    
// }
// else{
//     console.log("You quit");
    
// }


// let i=1;
// while(i<=4)
// {  
//     if(i==3)
//     {
//         continue;
//     }
//     console.log(i);
  
//     i++;
// }


// let fav="Avatar";
// let guess=prompt("Guess my fav movie")
// while(guess!=fav)
// {   if(guess=="quit")
// {
//     console.log("You quit");
//     break;
// }
   
//     console.log("You are wrong");
//      guess=prompt("wrong guess. please try again")
    
// }
// if(guess==fav)
// {
//     console.log("Congratulation");
    
// }


// let fruits=["mango","apple","banana","litchi"];
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
    
// }

// let fruits=["mango","apple","banana","litchi"];
// for(let i=fruits.length-1;i>=0;i--)
// {
//     console.log(i,fruits[i]);
    
// }

// let heros=[["ironman","spiderman","thor"],["superman","wonderwoman","flash"]];

// for(let i=0;i<heros.length;i++)
// {
//     // console.log(heros[i]);
//     console.log(`list #${i}`);
//     for(let j=0;j<heros[i].length;j++)
//     {
//         console.log(heros[i][j]);
    
//     }
    
// }
// let fruits=["mango","apple","banana","litchi"];
// for(fruit of fruits)
// {
//     console.log(fruit);
    
// }

// for(char of "Abhaay")
// {
//     console.log(char);
    
// }

// let heros=[["ironman","spiderman","thor"],["superman","wonderwoman","flash"]];
// for(list of heros)
// {
// //  console.log(`outer loop`);

//     for(hero of list)
// { 
//     // console.log(`inner loop`);

//     console.log(hero);
    
// }
// }

// let arr=[1,2,3,4,5,6,2,3];
// let num=2 ;
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]==num)
//     {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num=287152;
// let c=0;
// let copy=num;
// while(copy>0)
// {
// c++
   
// copy=Math.floor(copy/10);
// }
// console.log(c);

let num=287152;
let sum=0;
let copy=num;
while(copy>0)
{
let d=copy%10;
sum=sum+d;
   
copy=Math.floor(copy/10);
}
console.log(sum);


let n=5;
let ans=1;
for(let i=1;i<=n;i++)
{ ans*=i;

}
console.log((ans));

let arr=[12,22,10,8,22,66,78,99];
let maxi=0;

for(let i=0;i<arr.length;i++)
    { if(arr[i]>maxi)
    {
 maxi=arr[i];
    }
    

    }
    console.log((maxi));
    
















// let todo=[];
// let req=prompt("Please enter your request");
// console.log(req);

// while(true)
// {
//     if(req=="quit")
//     {
//         console.log("Quitting app");
//         break;
        
//     }
//     if(req=="list")
//         {  console.log("--------");
        
//         for(let i=0;i<todo.length;i++)
//             {
//             console.log(i,todo[i]);
            
//         }
//         console.log("--------");
//     }
//     else if(req=="add")
//     {
//       let task=prompt("please enter the task you want to add");
//       todo.push(task);
//       console.log("task added");
      
//     } 
//     else if(req==="delete")
//     {
//         let idx=prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
        
//     }
//     else
//     {
//          console.log("Wrong request");
         
//     }
//     let task=prompt("please enter the task you want to add");

 

// }