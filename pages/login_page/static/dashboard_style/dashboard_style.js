// POP UP MESSAGE
window.onload = function() {
    const popupMessage = document.getElementById("popupMessage");

    popupMessage.classList.add("show");
    setTimeout(() => {
        popupMessage.classList.remove("show");
    }, 2000);
};