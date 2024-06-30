document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.querySelector('.wheel');
    const spinBtn = document.querySelector('.spinBtn');
    const segments = document.querySelectorAll('.number span');
    const values = Array.from(segments).map(span => span.innerText);
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');
    let currentRotation = 0;

    const calculateSegmentIndex = (rotation) => {
        const segmentAngle = 360 / values.length;
        // Calculate adjusted rotation within 0-359 range
        let adjustedRotation = rotation % 360;
        if (adjustedRotation < 0) {
            adjustedRotation += 360;
        }
        // Determine the index of the segment based on current rotation
        let index = Math.floor(adjustedRotation / segmentAngle);
        return index;
    };

    const showPopup = (message) => {
        popupMessage.innerText = message;
        popup.style.display = 'block';
    };

    const hidePopup = () => {
        popup.style.display = 'none';
    };

    spinBtn.addEventListener('click', () => {
        const randomRotation = Math.ceil(Math.random() * 3600);
        const newRotation = currentRotation + randomRotation;

        wheel.style.transition = 'transform 5s ease-in-out';
        wheel.style.transform = `rotate(${newRotation}deg)`;

        setTimeout(() => {
            const finalRotation = newRotation % 360;
            const index = calculateSegmentIndex(finalRotation);
            showPopup(`Kita adalah ${values[index]}!`);
        }, 5000);

        currentRotation = newRotation;
    });

    closeBtn.addEventListener('click', hidePopup);
});