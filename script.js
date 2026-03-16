let count = localStorage.getItem("counter");

if(count === null){
count = 0;
}

const counter = document.getElementById("count");
counter.textContent = count;

function increase(){

count++;

counter.textContent = count;

counter.style.transform="scale(1.3)";

setTimeout(()=>{
counter.style.transform="scale(1)";
},150);

localStorage.setItem("counter",count);

}
