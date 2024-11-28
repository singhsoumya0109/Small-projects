// alert("Chose your choice by clicking on any of the three buttons....Good Luck....Happy playing!!");
let butn=document.querySelectorAll(".btn1");
let msg = document.querySelector("#msg");
let s1= document.querySelector("#s1");
let s2= document.querySelector("#s2");
let n=document.querySelector("#new");
// let darkBtn = document.querySelector(".dark");
// let b=document.querySelector(".game");
// let dark=document.querySelector(".dark");
s1.innerText =0;
s2.innerText =0;
let c=0;
let flag=0;
butn.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        box.classList.add("clicked");

        // Set a timeout to remove the "clicked" class after a certain duration
        setTimeout(() => {
            box.classList.remove("clicked");
        }, 50); 
        if(box.classList.contains("rock"))
        {
            c=0;
        }
        else if(box.classList.contains("paper"))
        {
            c=1;
        }
        else
        {
            c=2;
        }
        console.log(c);
        let c1 = Math.round(Math.random() * 2);
        console.log(c1);
        if(c==c1)
        {
            msg.innerText = `Its a draw!!!`;
            console.log("Draw");
            msg.classList.remove("normal");
            msg.classList.remove("green");
            msg.classList.remove("red");
            msg.classList.add("blue");
        }
        else if(c==0 && c1==2)
        {
            msg.innerText = `You won`;
            console.log("Player won");
            var t = s1.innerText;
            ++t;
            s1.innerText = t;
            msg.classList.remove("normal");
            msg.classList.remove("blue");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else if(c==1 && c1==0)
        {
            msg.innerText = `You won`;
            console.log("Player won");
            var t = s1.innerText;
            ++t;
            s1.innerText = t;
            msg.classList.remove("normal");
            msg.classList.remove("blue");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else if(c==2 && c1==1)
        {
            msg.innerText = `You won`;
            console.log("Player won");
            var t = s1.innerText;
            ++t;
            s1.innerText = t;
            msg.classList.remove("normal");
            msg.classList.remove("blue");
            msg.classList.remove("red");
            msg.classList.add("green");
        }
        else
        {
            msg.innerText = `You lost...Better luck next time`;
            console.log("Lost");
            var t = s2.innerText;
            ++t;
            s2.innerText = t;
            msg.classList.remove("normal");
            msg.classList.remove("blue");
            msg.classList.remove("green");
            msg.classList.add("red");
        }
    })
})
n.addEventListener("click",()=>
{
    s1.innerText =0;
    s2.innerText =0;
})
// dark.addEventListener("click",()=>{
//     if(c==0)
//     {
//         b.style.backgroundColor="white";
//         b.style.color="black";
//         //b.classList.remove("dark-mode");
//         c=1;
//         dark.innerText="Dark";
//     }
//     else
//     {
//         b.style.backgroundColor="black";
//         b.style.color="white";
//         // b.classList.add("dark-mode");
//         // b.classList.remove("light-mode");
//         c=0;
//         dark.innerText="Light";
//     }
// })
// darkBtn.addEventListener("click", () => {
//     // Toggle dark mode
//     document.body.classList.toggle("dark-mode");
    
//     // Update button text based on the mode
//     if (document.body.classList.contains("dark-mode")) {
//         darkBtn.innerText = "Light Mode";
//     } else {
//         darkBtn.innerText = "Dark Mode";
//     }
// });