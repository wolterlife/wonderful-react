// Config and slider on page
    const config = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    hoverpause: false,
    keyboard: false,
    gap: 15,
    dragThreshold: false,
    autoplay: 1,
    animationDuration: 15000,
    animationTimingFunc: "cubic-bezier(.78,.78,.36,.37)",
}
    new Glide(document.querySelector('.glide'), config).mount()
