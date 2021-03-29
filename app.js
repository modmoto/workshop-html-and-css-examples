function clickButton() {
    console.log('click');
}

window.onload = () => {
    document.getElementById('click-button').onclick = clickButton;
}
