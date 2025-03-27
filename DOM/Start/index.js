function changeBackground(color){
    document.body.style.backgroundColor = color;
}
const txt = document.getElementById('text');
const themeButton = document.getElementById('bg-color');
themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white'){
        changeBackground('black');
        themeButton.innerText = 'Light Mode';
        txt.style.color = 'white';

    }else {
        changeBackground('white');
        themeButton.innerText = 'Dark Mode';

    }
});

