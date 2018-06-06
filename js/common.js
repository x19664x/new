//这句话的本质就是设置 1rem的大小
document.querySelector("html").style.fontSize = window.screen.width / 10 + "px";
if (window.screen.width > 768) {
    document.querySelector("html").style.fontSize = "41.4px";
}