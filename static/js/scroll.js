document.addEventListener("DOMContentLoaded", () => {
    const textPath = document.getElementById("text-path")
    const scrollSpeed = 1;
    const startPosition = -100;

    document.getElementById("aboutbtn").addEventListener("click", 
    () => {
        const id = 'two';
        const yOffset = -20; 
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});

        document.getElementById("two").scrollIntoView({behavior: "smooth", block: "center"});
    });
    
    const updateTextPosition = () => {
        const container = document.getElementById("path");
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (containerRect.top <= windowHeight && containerRect.bottom >= 0) {
            const directionMultiplier = -1;
            // set to 1/-1 to change direction
            const startOffset = startPosition + ((containerRect.top - windowHeight) / (containerRect.height + windowHeight)) * 100 * scrollSpeed * directionMultiplier;
            textPath.setAttribute("startOffset", startOffset + "%");
        }
    }
    window.addEventListener("scroll", updateTextPosition);
})