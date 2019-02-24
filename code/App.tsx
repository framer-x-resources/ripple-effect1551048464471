import { Data, animate, Override, Animatable } from 'framer'
const data = Data({
  scale: Animatable(1),
  circleTop: Animatable(0),
  circleLeft: Animatable(0),
  circleScale: Animatable(1),
  circleOpacity: Animatable(0),
})

window.log = console.log

export const Button: Override = () => {
  return {
    onTap(e) {
      log('e', e)
      // reset scaled property
      data.circleScale.set(0.1)
      data.circleOpacity.set(1)
      // set start point
      data.circleLeft.set(e.devicePoint.x - 61) // minus Button's left value
      data.circleTop.set(e.devicePoint.y - 550) // minus Button's top value

      animate.easeIn(data.circleScale, 30)
      animate.easeIn(data.circleOpacity, 0)
    },
  }
}

export const Circle: Override = () => {
  return {
    top: data.circleTop,
    left: data.circleLeft,
    scale: data.circleScale,
    opacity: data.circleOpacity,
  }
}
