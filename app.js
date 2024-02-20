let boxes=document.querySelectorAll((".box"));
let resetbt=document.querySelector(("#reset"));
let  newgame=document.querySelector(("#new-btn"));
let  mescon=document.querySelector((".mes-con "));
let  msg=document.querySelector(("#meg"));
let turnO=true;

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}

const winpat=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked")
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        check();
    });
});
const showwinner= (w)=>
{
    msg.innerText=`congratulation, Winner is ${w}`;
    mescon.classList.remove("hide");
    diablebox();
}
   
const diablebox=()=>{
    for(let box of boxes)
    box.disabled=true;
}


const check =function(){
    for(p of winpat){
        // console.log(p[0],p[1],p[2]);
        // console.log(boxes[p[0]].innerText,boxes[p[1]].innerText, boxes[p[2]].innerText); 
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1!="" &&p2!=""&&p3!=""){
            if(p1===p2&&p2==p3){
                console.log("winner",p1);
                showwinner(p1);
            }
        }
           
    }

}

const resetgame =()=>{
    turnO=true;
    enable();
    mescon.classList.add("hide");
}
newgame.addEventListener('click',resetgame);
resetbt.addEventListener('click',resetgame);