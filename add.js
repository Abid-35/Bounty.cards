document.addEventListener("DOMContentLoaded", function () {
    const giftCards = document.querySelectorAll(".gift-card");

    giftCards.forEach(card => {
        card.addEventListener("contextmenu", function (event) {
            event.preventDefault(); // Prevents the default right-click menu
            showAd();
        });
    });
});

function showAd() {
    document.getElementById("adPopup").style.display = "block";
}

function hideAd() {
    document.getElementById("adPopup").style.display = "none";
}
