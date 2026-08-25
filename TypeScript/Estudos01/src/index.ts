function component() {
    const element = document.createElement('div');

    element.innerHTML = "<h1>Olá hahaha</h1>";

    return element;
}

document.body.appendChild(component());