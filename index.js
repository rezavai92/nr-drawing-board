window.addEventListener('load',()=>{

    const canvas = document.querySelector('#canvas')
    canvas.width = window.innerWidth;     // equals window dimension
    canvas.height = window.innerHeight;
    const ctx= canvas.getContext("2d")
   
    ctx.strokeStyle='black'
    
    
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
        ctx.lineWidth=10;
        
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }

    function changeColor(e){
        ctx.strokeStyle=e.target.value;
    }

    const colorChanger=document.querySelector("#changeColorInp")
    colorChanger.addEventListener("change",(e)=>{
        changeColor(e)
    })

    canvas.addEventListener("mousedown",(e)=>{

        start(e)

    })
    canvas.addEventListener("mouseup",()=>{

        stop()
    })
    canvas.addEventListener("mousemove",(e)=>{

        draw(e)
    })

})