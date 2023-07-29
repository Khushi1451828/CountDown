const endDate="3 August 2023 2:54 PM"

document.getElementById('end-date').innerHTML=endDate;
const inputBox=document.querySelectorAll("input")
const clock=()=>{
    const end=new Date(endDate)
    const now=new Date()
    // console.log(end);
    // console.log(now);
    //msec to sec 
    const diff=(end-now)/1000;
    if(diff<0)return;
    // console.log(diff);
    //3600sec=60min=1hr*24=1day
    //days
    inputBox[0].value=Math.floor(diff/3600/24);
    //hours
    inputBox[1].value=Math.floor(diff/3600)%24;
    //minutes
    inputBox[2].value=Math.floor(diff/60)%60;
    //seconds
    inputBox[3].value=Math.floor(diff%60)
    

}
clock();
setInterval(
    ()=>{
        clock()
    },
        1000
    
)