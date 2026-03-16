let count = localStorage.getItem("counter");

if(count === null){
count = 0;
}

document.getElementById("count").textContent = count;

function increase(){

count++;

document.getElementById("count").textContent = count;

localStorage.setItem("counter", count);

}
