// Star sky
function bdCanvas() {
  // минимальный и максимальный радиус звезды и цвета
  opts = {
    minRadius: 0.5,
    maxRadius: 1.4,
    colors: ["rgba(255, 255, 255, 0.7)", "rgba(252, 244, 201, 0.7)", "rgba(201, 252, 201, 0.7)", "rgba(201, 236, 252, 0.7)", "rgba(229, 201, 252, 0.7)", "rgba(252, 201, 201, 0.7)", "rgba(252, 201, 241, 0.7)", "rgba(252, 201, 201, 0.7)"],
    delay: 90,
    step: 0.1
  }

  let canvas = document.querySelector("#canvas-bg");

  resizeCanvas();

  // определяем размеры холста по размерам окна
  function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  // следим за изменением размера окна
  window.addEventListener("resize", function () {
    windowResize();
  })

  let check;

  function windowResize() {
    clearTimeout(check);
    check = setTimeout(function () {
      clearInterval(animations);
      resizeCanvas();
      setup();
    }, 100)
  }

  let ctx = canvas.getContext("2d");

  Stars = function (w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = opts.minRadius + Math.random() * (opts.maxRadius - opts.minRadius);
    this.color = opts.colors[[Math.round(Math.random() * opts.colors.length)]];
    this.vector = Math.round(Math.random()) || -1;

    // отрисовка звезды
    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }

    this.update = function () {
      this.check();
      this.radius += opts.step * this.vector;
    }

    this.check = function () {
      if (this.radius > opts.maxRadius || this.radius < opts.minRadius) {
        this.vector *= -1;
      }
    }
  }

  // создание массива звезд и их отрисовка с помощью функции draw()
  function setup() {
    arrStars = [];

    for (let i = 0; i < (w / 40) * (h / 40); i++) { // определем количество звезд относительно размеров окна (w/h)
      arrStars.push(new Stars(w, h));
      arrStars[i].draw();
    }
    loop();
  }

  setup();

  function loop() {
    animations = setInterval(function () {
      ctx.clearRect(0, 0, w, h); // очищение canvas
      for (let i = 0; i < arrStars.length; i++) {
        arrStars[i].update();
        arrStars[i].draw();
      }
    }, opts.delay);
  }

};

window.onload = function () {
  bdCanvas();
};



// Earth planet animation
anime({
  targets: '.planet-earth',
  direction: 'alternate',
  loop: true,
  rotate: -360,
  easing: 'easeInOutQuad',
  duration: 10000
});

// Yellow planet animation 
anime({
  targets: [
    '.planet-yellow > svg > path:nth-child(16)', 
    '.planet-yellow > svg > path:nth-child(14)', 
    '.planet-yellow > svg > path:nth-child(18)', 
    '.planet-yellow > svg > path:nth-child(17)', 
    '.planet-yellow > svg > path:nth-child(15)', 
    '.planet-yellow > svg > path:nth-child(13)'
  ],
  fill: '#f60606',
  opacity: 0.8,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true
});

anime({
  targets: '.planet-yellow',
  rotate: 360,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
  duration: 60000
});


// Blue planet animation 
anime({
  targets: [
    '.planet-blue > svg > path:nth-child(30)',
    '.planet-blue > svg > path:nth-child(32)',
    '.planet-blue > svg > path:nth-child(33)',
    '.planet-blue > svg > path:nth-child(41)',
    '.planet-blue > svg > path:nth-child(42)',
    '.planet-blue > svg > path:nth-child(43)',
    '.planet-blue > svg > path:nth-child(51)',
    '.planet-blue > svg > path:nth-child(53)',
    '.planet-blue > svg > path:nth-child(56)',
    '.planet-blue > svg > path:nth-child(59)',
    '.planet-blue > svg > path:nth-child(60)',
    '.planet-blue > svg > path:nth-child(61)'
  ],
  translateX: 10,
  direction: 'alternate',
  rotate: 3,
  loop: true,
  easing: 'easeInOutQuad',
  duration: 2000
});


// Red planet animation
anime({
  targets: [
    '.planet-red > svg > path:nth-child(4)', 
    '.planet-red > svg > path:nth-child(8)', 
    '.planet-red > svg > path:nth-child(11)'
  ],
  fill: '#000',
  opacity: 0.8,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true
});
anime({
  targets: '.planet-red',
  rotate: -360,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
  duration: 60000
});


// Grey planet animation
anime({
  targets: [
    '.planet-grey > svg > path:nth-child(3)', 
    '.planet-grey > svg > path:nth-child(4)', 
    '.planet-grey > svg > path:nth-child(5)'
  ],
  opacity: 0.1,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true
});
anime({
  targets: '.planet-red',
  rotate: -360,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
  duration: 60000
});

anime({
  targets: '.planet-grey > svg > path:nth-child(1)',
  opacity: 0.1,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  duration: 3000,
  loop: true
});
anime({
  targets: '.planet-red',
  rotate: -360,
  direction: 'alternate',
  loop: true,
  easing: 'linear',
  duration: 60000
});


// hero-1 animation
anime({
  targets: '.hero-1',
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  keyframes: [
    { translateY: -10 },
    { translateX: 10 },
    { translateY: 10 },
    { translateY: -10 }
  ],
  scale: 1.3,
  duration: 10000
});

// hero-2 animation
var path = anime.path('.motion-path path');
anime({
  targets: '.hero-2',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 30000,
  loop: true
});

// hero-3 animation
anime({
  targets: '.hero-3',
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  translateY: 20,
  duration: 5000
});

// hero-4 animation
anime({
  targets: '.hero-4',
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  translateX: 20,
  duration: 5000
});