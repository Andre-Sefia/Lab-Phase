/* VARIABLES */
const youtube = document.getElementById('youtube')
let youtube2 = document.getElementById('youtube2')

let bigRooms1 = document.querySelector('#bigRooms1')
let bigRooms2 = document.querySelector('#bigRooms2')
let smallRooms1 = document.querySelector('#smallRooms1')
let smallRooms2 = document.querySelector('#smallRooms2')


/* FUNCTIONS */
//Buttons!!
//Youtube
youtube.onmouseover = function(){
    youtube.innerHTML = 'Watch on Youtube'
}

youtube.onmouseout = function(){
    youtube.innerHTML = 'Online Tour'
}

//Youtube2
youtube2.onmouseover = function(){
    youtube2.innerHTML = 'Watch on Youtube'
}

youtube2.onmouseout = function(){
    youtube2.innerHTML = 'Take a Virtual Tour'
}


//Rooms
bigRooms1.onmouseover = function(){
    if(bigRooms1.className == 'bigRooms'){
        bigRooms1.className = 'availableRooms'
    }
}
bigRooms2.onmouseover = function(){
    if(bigRooms2.className == 'bigRooms'){
        bigRooms2.className = 'availableRooms'
    }
}
smallRooms1.onmouseover = function(){
    if(smallRooms1.className == 'smallRooms'){
        smallRooms1.className = 'availableRooms2'
    }
}
smallRooms2.onmouseover = function(){
    if(smallRooms2.className == 'smallRooms'){
        smallRooms2.className = 'availableRooms2'
    }
}



bigRooms1.onmouseout = function(){
    if(bigRooms1.className == 'availableRooms'){
        bigRooms1.className = 'bigRooms'
    }
}
bigRooms2.onmouseout = function(){
    if(bigRooms2.className == 'availableRooms'){
        bigRooms2.className = 'bigRooms'
    }
}
smallRooms1.onmouseout = function(){
    if(smallRooms1.className == 'availableRooms2'){
        smallRooms1.className = 'smallRooms'
    }
}
smallRooms2.onmouseout = function(){
    if(smallRooms2.className == 'availableRooms2'){
        smallRooms2.className = 'smallRooms'
    }
}