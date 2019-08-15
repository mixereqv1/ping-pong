export function setPos($element, x, y) {
    $element.style.transform = `translate(${x}px, ${y}px)`;
}

export function clamp(v, min, max) {
    if (v < min) {
        return min
    }else if (v > max) {
        return max
    }else {
        return v
    }
}