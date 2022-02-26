const div_kvadrat = document.getElementById("kvadrat")
const div_prepreka = document.getElementById("prepreka")


const OKVIR = {
    width:900,
    height:900
}

const IGRAC = {
    width:300,
    height:300,
    left:0,
    top:0,
    speed: 15
}

const PREPREKA = {
    width:50,
    height:300,
    top:300,
    left:450,
    direction: "down"
}

function prepreka_movement(){
    if(PREPREKA.direction == "down"){
        PREPREKA.top++
    }else{
        PREPREKA.top--
    }
    
    if(PREPREKA.top == 0){
        PREPREKA.direction = "down"
    }
    if(PREPREKA.top + 300 >= 900){
        PREPREKA.direction = "up"
    }
    div_prepreka.style.top = PREPREKA.top + "px"
}


function collision_detection(){
    if (IGRAC.left < PREPREKA.left + PREPREKA.width &&
        IGRAC.left + IGRAC.width > PREPREKA.left &&
        IGRAC.top < PREPREKA.top + PREPREKA.height &&
        IGRAC.height + IGRAC.top > PREPREKA.top) {
        // collision detected!
       div_kvadrat.style.backgroundColor = "red"
       div_kvadrat.top = 0
       div_kvadrat.top = 0
       IGRAC.top = 0
       IGRAC.left = 0
    } else {
        // no collision
        div_kvadrat.style.backgroundColor = "violet"
    }
}

function kvadrat_movment(e){
    switch(e.key){
        case "W" : case "w" : case "ArrowUp" :
        if(IGRAC.top >= IGRAC.speed ){IGRAC.top -= IGRAC.speed}
        break

        case "S" : case "s" : case "ArrowDown" :
        if(IGRAC.top >= 0 && IGRAC.top + IGRAC.height  + IGRAC.speed <= 900 ){IGRAC.top += IGRAC.speed} 
        break
 
        case "A" : case "a" : case "ArrowLeft" :
        if(IGRAC.left >= IGRAC.speed ){IGRAC.left -= IGRAC.speed}
        break

        case "D" : case "d" : case "ArrowRight" :
        if(IGRAC.left + IGRAC.width  + IGRAC.speed <= 900 ){IGRAC.left += IGRAC.speed} 
        break
    }

    div_kvadrat.style.top = IGRAC.top + "px"
    div_kvadrat.style.left = IGRAC.left + "px"
}


function keydown_heandler(e){
    kvadrat_movment(e)
    collision_detection()
}

window.onkeydown = keydown_heandler
setInterval(prepreka_movement,5)