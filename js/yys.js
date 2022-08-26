// 顶部轮播图
let min = document.querySelectorAll('.min')
let images = document.querySelector('.images')

// console.log(min.length)

let index = 0
let time

function position() {
    images.style.left = (index * -100) + "%"
}

function add(){
    if(index >= min.length-1){
        index = 0
    }else{
        index++
    }
}

function desc(){
    if(index < 1){
        index = min.length-1
    }else{
        index--
    }
}

function timer(){
    time = setInterval(()=>{
        index++
        desc()
        add()
        position()
    },3000)
}

for(let i=0;i<min.length;i++){
    min[i].addEventListener('click',()=>{
        // alert(i)
        index = i;
        position()
        clearInterval(time)
        timer()
    })
}

timer()

