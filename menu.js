function addMenuListener(item){
    console.log(item);
    document.getElementById(item).addEventListener("click", ()=>{
        passValue(item);
    })
}

function passValue(item){
    localStorage.setItem("item", item);
    console.log("clicked ..." + item);
    window.location.href = "./details.html";
}

addMenuListener("coffee");
addMenuListener("tea");
addMenuListener("water");

