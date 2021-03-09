import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    this.tl1 = gsap.timeline({});

    (this.shapes = "rect, circle, ellipse, polyline"), (this.tl = gsap.timeline({ repeat: 1, yoyo: true }));

    this.init();
  }

  init() {
    this.anim();
  }

  anim() {
    console.log(document.getElementById("line-1"));
    this.tl1.from("#line-1", { drawSVG: 0, duration: 5 });

    gsap.set(".line", { attr: { stroke: "hsl(1,100%, 50%)", "stroke-width": 4, "stroke-linecap": "round" } });
    // gsap.set(".line-2", { attr: { "stroke-width": 9 }, opacity: 0.15 });

    this.tl.from(this.shapes, { duration: 1, drawSVG: 0, stagger: 0.1 });
  }
}

new Lines();
