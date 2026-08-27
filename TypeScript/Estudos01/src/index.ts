function component() {
    const element = document.getElementById("content");    
    if (element) {
        element.innerHTML += "<h1></h1>";
    }
}

component();