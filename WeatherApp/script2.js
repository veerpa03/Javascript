const button = document.getElementById("clickButton");
const uname = document.getElementById("input-username");
const head = document.getElementById("username");

button.addEventListener('click', () => {
    const value = uname.value;
    localStorage.setItem('name', value);
    location.reload();
})

window.addEventListener('load', () =>{
    const value = localStorage.getItem('name');
    head.innerText=value;
})