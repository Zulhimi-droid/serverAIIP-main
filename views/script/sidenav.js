document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.getElementById("sidenav");
    const content = document.getElementById("content");
    const iframe = document.getElementById("dashboard-iframe");

    const sidenavToggle = document.getElementById("sidenav-toggle");

    function setIframeWidth() {
        const sidenavWidth = sidenav.offsetWidth;
        const screenWidth = window.innerWidth;
        const iframeWidth = screenWidth - sidenavWidth;
        iframe.style.width = iframeWidth + "px";
    }
    
    sidenav.addEventListener("mouseenter", function () {
        sidenav.classList.add("expanded");
        content.classList.add("expanded");
        setIframeSize(); // Set the iframe size when the sidenav is expanded
    });
    
    sidenav.addEventListener("mouseleave", function () {
        sidenav.classList.remove("expanded");
        content.classList.remove("expanded");
        setIframeSize(); // Set the iframe size when the sidenav is collapsed
    });
    
    // Set the initial iframe size
    setIframeSize(iframe.style.height = "780px");
    

function setIframeSize() {
    const sidenavWidth = sidenav.offsetWidth;
    const screenWidth = window.innerWidth;
    const iframeWidth = screenWidth - sidenavWidth;
    iframe.style.width = iframeWidth + "px";

    if (sidenav.classList.contains("expanded"))
        iframe.style.height = "780px";
    }
}
)