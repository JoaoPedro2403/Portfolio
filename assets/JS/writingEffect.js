function typeWriter(element){
    const spanArray = element.innerHTML.split('');
    element.innerHTML = '';
    spanArray.forEach(( letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i);
    });
}

const spanTilte = document.querySelector('span');
typeWriter(spanTilte)