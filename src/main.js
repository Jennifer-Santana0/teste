const btns = document.querySelectorAll('.btns');
const gif = document.querySelectorAll('.gif');


btns.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        event.preventDefault()

        el.style.zIndex = -1

        setTimeout(()=>{
            el.style.zIndex = 1
        },2000)

    })
})
