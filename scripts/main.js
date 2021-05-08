let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/mwtc.png'){
        myImage.setAttribute('src','images/851.png');
    }else{
        myImage.setAttribute('src','images/mwtc.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName(){
    let myName = prompt('what is your name?');
    if(myName){
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + "'s Windows Terminal";
    }else{
        myHeading.textContent = 'Windows Terminal';
    }

}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + "'s Windows Terminal";
}

myButton.onclick = function(){
    setUserName();
}

