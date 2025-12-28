let myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome,';

let myButton = document.querySelector('button');

function setUserName() {
    console.log("appele")
    let myName = prompt('Can you give me your name');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Welcome,' + myName;
}

myButton.addEventListener('click', function() {
  setUserName();
});

window.onload = (_ev) => {
  if (localStorage.getItem('nom') === null) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Welcome, ' + storedName;
  }
}