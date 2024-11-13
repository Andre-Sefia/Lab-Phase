/*VARIABLES!!!*/
//Adults Button
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let adult = document.getElementById('adult')

//Kids Button
let minus2 = document.getElementById('minus2')
let plus2 = document.getElementById('plus2')
let kids = document.getElementById('kids')

let ans = 0
let solu = 0
adult.innerHTML = ans
kids.innerHTML = solu

//Check Availability
let available = document.getElementById('available')
let rooms1 = document.getElementById('room1')
let rooms2 = document.getElementById('room2')
let rooms3 = document.getElementById('room3')
let availableInfo = document.getElementById('availableInfo')
let rooms = document.getElementById('rooms')


//Booking
let btn1 = document.getElementById('btn1')
let roomPrice1 = document.getElementById('roomPrice1')
let btn2 = document.getElementById('btn2')
let roomPrice2 = document.getElementById('roomPrice2')
let btn3 = document.getElementById('btn3')
let roomPrice3 = document.getElementById('roomPrice3')
let btn4 = document.getElementById('btn4')
let roomPrice4 = document.getElementById('roomPrice4')
let btn5 = document.getElementById('btn5')
let roomPrice5 = document.getElementById('roomPrice5')


let booked = document.getElementById('booked')
let booked2 = document.getElementById('booked2')
let booked3 = document.getElementById('booked3')
let booked4 = document.getElementById('booked4')
let booked5 = document.getElementById('booked5')




/* MOBILE NAVIGATION */
let burgerNav = document.getElementById('burgerNav')
let mobileMenu = document.getElementById('mediaMenu')
let closeTab = document.getElementById('closeMenu')




//FUNCTIONS
//Adult
minus.onclick = function(){
    adult.innerHTML = --ans
    if(ans < 0){
        adult.innerHTML = 0
    }
}
plus.onclick = function(){
    adult.innerHTML = ++ans
    if(ans < 0){
        adult.innerHTML = 0
    }
}

//Kids
minus2.onclick = function(){
    kids.innerHTML = --solu
    if(solu < 0){
        kids.innerHTML = 0
    }
}
plus2.onclick = function(){
    kids.innerHTML = ++solu
    if(solu < 0){
        kids.innerHTML = 0
    }
}


//Check Availability
available.onclick = function(){
    rooms1.className = 'unavailable'
    rooms2.className = 'unavailable'
    rooms3.className = 'unavailable'
    availableInfo.innerHTML = 'Our Available Rooms'
    rooms.style.height = '200vh'
}


//Bookings
btn1.onclick = function(){
    booked.style.display = "flex"
    roomPrice1.style.display = 'none'
}
btn2.onclick = function(){
    booked2.style.display = "flex"
    roomPrice2.style.display = 'none'
}
btn3.onclick = function(){
    booked3.style.display = "flex"
    roomPrice3.style.display = 'none'
}
btn4.onclick = function(){
    booked4.style.display = "flex"
    roomPrice4.style.display = 'none'
}
btn5.onclick = function(){
    booked5.style.display = "flex"
    roomPrice5.style.display = 'none'
}



// MOBILE NAVIGATION
burgerNav.onclick = function(){
    if(mobileMenu.style.display = 'none'){
        mobileMenu.style.display = 'flex'
    }
}

closeTab.onclick = function(){
    if(mobileMenu.style.display = 'flex'){
        mobileMenu.style.display = 'none'
    }
}