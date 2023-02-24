function addMenuListener(item){
    console.log(item);
    document.getElementById(item).addEventListener("click", ()=>{
        passValueURL(item);
    })
}

function passValueLocalStorage(item){
    localStorage.setItem("item", item);
    console.log("clicked ..." + item);
    window.location.href = "./details.html";
}

function passValueURL(item){
    console.log("clicked ..." + item);
    window.location.href = "./details.html?item=" + item;
}

addMenuListener("coffee");
addMenuListener("tea");
addMenuListener("water");

