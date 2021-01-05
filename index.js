const layers = document.querySelectorAll('.parallax-layer');
const layersDepth = Array.from(layers).map((layer) => (
    layer.dataset.depth ? Number(layer.dataset.depth) : 0.2
));

startAnimation()

function startAnimation() {
    window.requestAnimationFrame(onAnimationFrame);
}

function onAnimationFrame() {
    for(let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const layerDepth = layersDepth[i];
        const yOffset = -window.scrollY * layerDepth;
        setPosition(layer, yOffset);
    }

    window.requestAnimationFrame(onAnimationFrame);
}

function setPosition(element, yPosition) {
    element.style.transform = `translate3d(0, ${yPosition.toFixed(1)}px, 0)`;
}