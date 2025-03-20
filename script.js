document.addEventListener("DOMContentLoaded", () => {
    const floatingCircle = document.querySelector(".floating-circle");
    let direction = 1;

    function animateCircle() {
        let pos = 0;
        setInterval(() => {
            if (pos >= 20 || pos <= -20) {
                direction *= -1;
            }
            pos += direction;
            floatingCircle.style.transform = `translateY(${pos}px)`;
        }, 50);
    }
    
    animateCircle();
});
