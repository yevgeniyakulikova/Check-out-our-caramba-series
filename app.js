window.addEventListener("DOMContentLoaded", (event) => {
    system_setup();
});
// appena dom si è caricato chiamami funzione

function system_setup() {
    const ilBottone = document.getElementById("start-me-up");
    ilBottone.addEventListener("click", (event) => {
        start_application();
    });
}

function start_application() {
    const welcome = document.getElementById("intro");
    welcome.className += " d-none";

    const series_card = document.getElementById("series-card");
    series_card.className =  series_card.className.replace(" d-none", ' ');
}
