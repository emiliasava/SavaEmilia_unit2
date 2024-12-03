
document.querySelector('#monitorizare-titlu').addEventListener('dblclick', function () {
    const images = ["cpu.jpeg", "memory.jpeg", "wifi.jpeg"];
    const container = document.querySelector('.imagine-container');
    let index = 0;
    container.innerHTML = "";
    const showImage = () => {
        container.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}" style="width: 200px; margin: 10px; border-radius: 10px;">`;
        index = (index + 1) % images.length;
    };
    showImage();
    const interval = setInterval(showImage, 3000);
    setTimeout(() => clearInterval(interval), images.length * 3000);
});
