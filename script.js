let wrapper = document.querySelector('.wrapper')
let block = document.querySelector('.block')

let t = 0
let r = 0
let w = 400
let h = 400
console.log(wrapper.clientHeight);
wrapper.style.height = `${(h)}px` 
wrapper.style.width = `${w}px`
document.body.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowUp'){
        if(t === 0){
            return 0
        }else{
            block.style.top = `${(t = t - 20)}px`
            block.style.transition = 'all .4s'
        }
    }
})
document.body.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowLeft'){
        if(r === 0){
            return 0
        }else{
            block.style.left = `${(r = r - 20)}px`
            block.style.transition = 'all .4s'
        }
    }
})
document.body.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowDown'){
        if(t > wrapper.clientHeight-105){
            wrapper.style.height = `${(h = h + 100)}px` 
        }
            
        block.style.top = `${(t = t + 20)}px`
        block.style.transition = 'all .4s'
    }
})

document.body.addEventListener('keydown',(e)=>{
    if(e.code === 'ArrowRight'){
        if(r > wrapper.clientWidth-105){
            wrapper.style.width = `${w = w + 100}px`
        }
        block.style.left = `${(r = r + 20)}px`
        block.style.transition = 'all .4s'
        if(r === 600){
            wrapper.style.background = 'blue'
        }
        if(r === 800){
            wrapper.style.background = 'green'
        }
        
    }
    
})

const color = document.querySelector('input[type="color"]')


    color.addEventListener('input', () =>{
    document.body.style.background = color.value
    localStorage.setItem('color',color.value)
})

color.setAttribute('value', localStorage.getItem('color'))
document.body.style.background = color.getAttribute('value')