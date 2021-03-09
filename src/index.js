import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    this.tl1 = gsap.timeline({});

    this.init();
  }

  init() {
    this.anim();
  }

  anim() {
    console.log(document.getElementById("line-1"));
    this.tl1.from("#line-1", { drawSVG: 0, duration: 5 });

    gsap.set(".line", { attr: { stroke: "hsl(1,100%, 50%)", "stroke-width": 4, "stroke-linecap": "round" } });
    gsap.set(".line3", { attr: { "stroke-width": 9 }, opacity: 0.15 });

    var shapes = "rect, circle, ellipse, polyline",
      tl = gsap.timeline({ repeat: 1, yoyo: true });

    tl.fromTo(shapes, { drawSVG: "100%" }, { duration: 1, drawSVG: "50% 50%", stagger: 0.1 })
      .fromTo(shapes, { drawSVG: "0%" }, { duration: 0.1, drawSVG: "10%", immediateRender: false }, "+=0.1")
      .to(shapes, { duration: 1, drawSVG: "90% 100%", stagger: 0.5 })
      .to(shapes, {
        duration: 1,
        rotation: 360,
        scale: 0.5,
        drawSVG: "100%",
        stroke: "white",
        strokeWidth: 6,
        transformOrigin: "50% 50%",
      })
      .to(shapes, { duration: 0.5, stroke: "red", scale: 1.5, opacity: 0, stagger: 0.2 });
  }
}

new Lines();
