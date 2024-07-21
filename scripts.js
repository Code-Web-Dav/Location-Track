const dis = document.getElementById("Disp")
const inp = document.getElementById("inp")
const Btn = document.getElementById("clear")
const co = document.getElementById("contain")
function Display(data){

    co.style.height="650px"
    dis.style.height = "400px"
    dis.style.width = "500px"
    dis.style.boxShadow = "0px 0px 10px hsl(0, 100%, 99%)"
    dis.style.backgroundColor = "whitesmoke"
    dis.style.overflow="auto"
    dis.innerHTML = ""
    for(var key in data){
        val = data[key]
        dis.innerHTML+=`<pre>[ + ] ${key} : ${val}</pre>`
    }
    Btn.style.marginTop = "15px"
    Btn.innerHTML= '<button onclick="cl()">clear</button>'
}
function cl(){
    co.style.height="180px"
    dis.style.height = "0px"
    dis.style.width = "0px"
    dis.style.boxShadow = "none"
    dis.style.overflow = "hidden"
    dis.backgroundColor = "black"
    dis.color="black"
    Btn.innerHTML = ""
}
function test(){
    co.style.height="180px"
    dis.style.boxShadow = "none"
    dis.style.height = "0px"
     dis.backgroundColor = "black"
    dis.color="black"
    dis.style.width = "0px"
    dis.style.overflow = "hidden"
    Btn.innerHTML= ""
    if(inp.value.trim().length === 0){
        alert("INPUT ERROR")
    }else{
        fetch("http://ip-api.com/json/"+inp.value.trim())
        .then(response => response.json())
        .then(data => Display(data))
        .catch(error => console.error('Error:', error));

    }
}