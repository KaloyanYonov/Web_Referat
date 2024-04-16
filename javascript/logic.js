document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('main h2');
    headers.forEach(header => {
        const content = header.nextElementSibling;
        content.style.maxHeight = "0"; 
        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease";

        header.addEventListener('click', function() {
            if (content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px"; 
            }
        });
    });
});
