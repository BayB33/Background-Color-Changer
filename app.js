const displayedColor = document.getElementById('selected_color');

const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    displayedColor.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", changeColor);