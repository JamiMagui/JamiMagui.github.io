let char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '*', '?', '~', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let password1 = document.getElementById("passwords1")
let password2 = document.getElementById("passwords2")
let password3 = document.getElementById("passwords3")
let password4 = document.getElementById("passwords4")

isAlive = false

function getRandomItem() {
    var item = char[Math.floor(Math.random()*char.length)];
    var password = char.push(item)

    for (let i = 0; i < 1; i++) {

        password1.textContent += item
    }
  }

function getRandomItem2() {
    var item = char[Math.floor(Math.random()*char.length)];
    var password = char.push(item)

    for (let i = 0; i < 1; i++) {

        password2.textContent += item
    }}

function getRandomItem3() {
        var item = char[Math.floor(Math.random()*char.length)];
        var password = char.push(item)
    
        for (let i = 0; i < 1; i++) {
    
            password3.textContent += item
        }}

function getRandomItem4() {
            var item = char[Math.floor(Math.random()*char.length)];
            var password = char.push(item)
            for (let i = 0; i < 1; i++) {
        
                password4.textContent += item
            }}


function getRandomPassword() {
  let b = document.getElementById("charactersBox").value;
  if (b > 4 && b < 21) {
    password1.textContent = '' 
    password2.textContent = '' 
    password3.textContent = '' 
    password4.textContent = '' 
    console.log('Generating random passwords...')
    let b = document.getElementById("charactersBox").value;
    for (let i = 0; i < b; i++) {
        getRandomItem(char);
        getRandomItem2(char);
        getRandomItem3(char);
        getRandomItem4(char);
}
isAlive = true;
} else {
  password1.textContent = '' 
  password2.textContent = '' 
  password3.textContent = '' 
  password4.textContent = '' 
  isAlive = false;
  alert("please choose a number between 5 and 20")
}}

function copyToClipboard1(elementId) {
    if(isAlive === true) {var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("passwords1").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("your new password has been copied to the clipboard")
    console.log(document.getElementById("passwords1").innerHTML)
  }}
function copyToClipboard2(elementId) {
    if(isAlive === true) {var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("passwords2").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("your new password has been copied to the clipboard")
    console.log(document.getElementById("passwords2").innerHTML)
  }}
function copyToClipboard3(elementId) {
    if(isAlive === true) {var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("passwords3").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("your new password has been copied to the clipboard")
    console.log(document.getElementById("passwords3").innerHTML)
  }}
function copyToClipboard4(elementId) {
    if(isAlive === true) {var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("passwords4").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("your new password has been copied to the clipboard")
    console.log(document.getElementById("passwords4").innerHTML)
  }}


