window.addEventListener('load',()=>{

    const canvas = document.querySelector('#canvas')
    canvas.width = window.innerWidth;     // equals window dimension
    canvas.height = window.innerHeight;
    const ctx= canvas.getContext("2d")
   
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
        ctx.strokeStyle='red'
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }

    window.addEventListener("mousedown",(e)=>{

        start(e)

    })
    window.addEventListener("mouseup",()=>{

        stop()
    })
    window.addEventListener("mousemove",(e)=>{

        draw(e)
    })

})