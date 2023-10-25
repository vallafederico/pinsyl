import { Text } from "./animation/text"
// import { Track } from "../util/track";
// import { Alpha } from "./animation/alpha";
import Tween from "gsap"

export class Dom {
  constructor() {
    this.create()
  }

  resize() {}

  render(t) {
    // this.track?.render();
  }

  create() {
    this.texts = [
      ...document.querySelectorAll(
        '[data-a="char"],[data-a="word"],[data-a="line"]'
      ),
    ].map(el => new Text({ element: el }))

    this.start()
  }

  start() {
    this.texts.forEach(text => text.start())
    this.alpha?.start()
    this.track?.start()
  }

  destroy() {
    this.texts.forEach(text => text.animateOut())
  }

  /* --  Pages */
  transitionOut(page) {
    // console.log("DOM::transitionOut", page);

    return new Promise(resolve => {
      Tween.to(page.parentElement, {
        autoAlpha: 0,
        duration: 0.2,
        ease: "slow.out",
        onComplete: resolve,
      })
    })
  }

  transitionIn(page) {
    // console.log("DOM::transitionIn", page);

    return new Promise(resolve => {
      Tween.to(page.parentElement, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "expo.out",
        onComplete: resolve,
      })

      // resolve()
    })
  }
}
