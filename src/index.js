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
  }
}

new Lines();
