console.log("Now inside JavaScript");
let myHTML = document.querySelector('html');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/profile-pic2.png') {
        myImage.setAttribute('src','images/profile-pic.jpg');
    } else {
        myImage.setAttribute('src','images/profile-pic2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt('Please enter your name.');
    if(!myName || myName == null) {
        alert("Name is required!");
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my test site, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let StoredName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my test site, ' + StoredName;
}

myButton.onclick = function() {
    setUserName();
}