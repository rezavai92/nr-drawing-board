window.addEventListener('load',()=>{

    const canvas = document.querySelector('#canvas')
    canvas.width = window.innerWidth;     // equals window dimension
    canvas.height = window.innerHeight;
    const ctx= canvas.getContext("2d")
    ctx.lineWidth=3;
    let def = "black"
    ctx.strokeStyle=def
    
    
    let paint = false;
    function start(e){

        paint = true;
        draw(e)
        
    }
    function stop(){
        paint  = false;
        ctx.beginPath()
    }
    function draw(e){

        if(!paint) return;
        ctx.lineCap="round";
       
        
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }

    function changeFontWeight(level){

        ctx.lineWidth=level;
    }

    const brush = document.querySelector(".paint-brush");
    const eraser = document.querySelector(".paint-eraser");
    brush.addEventListener( "click",(e)=>{
        const pop = document.querySelector(".popover");
        pop.style.visibility=pop.style.visibility=="visible"?"hidden":"visible"
        if(pop.style.visibility=="visible"){
            paint=false;

        }
        
    })
    let beforeErase="";
//x1 button
    const x1= document.querySelector('.x1-btn');
    x1.addEventListener('click',(e)=>{
        
        ctx.strokeStyle=beforeErase;
        eraser.style.backgroundColor="white"
        brush.style.backgroundColor=beforeErase=="black"||"#000000"?"white":beforeErase;
        changeFontWeight(3);
       // console.log("hello")
    })

//x2 button
    const x2= document.querySelector('.x2-btn');
    x2.addEventListener('click',(e)=>{
        

        ctx.strokeStyle=beforeErase;
        eraser.style.backgroundColor="white"
        brush.style.backgroundColor=beforeErase=="#000000"?"white":beforeErase;
        changeFontWeight(5);
      //  console.log("hello")
    })

//x3 button
    const x3= document.querySelector('.x3-btn');
    
    x3.addEventListener('click',(e)=>{
        ctx.strokeStyle=beforeErase;
        eraser.style.backgroundColor="white"
        brush.style.backgroundColor=beforeErase=="#000000"?"white":beforeErase;
        changeFontWeight(10);
      //  console.log("hello")
    })

    //click outside toolbar , inside canvas
    canvas.addEventListener("click",()=>{

        const pop = document.querySelector(".popover");
        pop.style.visibility="hidden"
        
    })
// erase



    eraser.addEventListener("click",()=>{

        eraser.style.backgroundColor="silver"
        ctx.lineWidth=20;
        beforeErase=ctx.strokeStyle;
        ctx.strokeStyle="white";
        brush.style.backgroundColor="white"
 
    })


   
    function changeColor(e){
        ctx.strokeStyle=e.target.value;
    
        if(ctx.strokeStyle=="#000000"){
            brush.style.backgroundColor="white"
        }
        else{
            brush.style.backgroundColor=e.target.value;
        }

    }



    const colorChanger=document.querySelector("#changeColorInp")
    colorChanger.addEventListener("change",(e)=>{
        changeColor(e)
    })

    canvas.addEventListener("mousedown",(e)=>{

        
        const pop = document.querySelector(".popover");
        console.log(pop.style.visibility)
        if(pop.style.visibility=="visible"){

        }
        else{
            start(e)
        }
    })
    canvas.addEventListener("mouseup",()=>{

        stop()
    })
    canvas.addEventListener("mousemove",(e)=>{

        draw(e)
    })

})