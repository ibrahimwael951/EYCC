export const hover_bg = {};

export const ViewPort = {
  viewport: { once: true, amount: 0.5 },
  whileInView: { y: 0, x: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
};
export const Animate = {
  animate: { y: 0, x: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
};
export const FadeUp = {
  initial: { y: 60, opacity: 0, filter: "blur(20px)" },
};
export const FadeDown = {
  initial: { y: -60, opacity: 0, filter: "blur(20px)" },
};
export const FadeRight = {
  initial: { x: 60, opacity: 0, filter: "blur(20px)" },
};
export const FadeLeft = {
  initial: { x: -60, opacity: 0, filter: "blur(20px)" },
};
export const Rotate_Scale_Tap = {
  whileTap: { rotateZ: -6, scale: 0.94, transition: { duration: 0.04 } },
};
export const opacity = {  
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};
export const opacityWithBlur = {
  initial: { filter: "blur(20px)", opacity: 0 },
  whileInView: { filter: "blur(0px)", opacity: 1 },
};
export const BlurAnimate = {
  initial: { filter: "blur(20px)", scale: 0.8 },
  whileInView: { filter: "blur(0px)", scale: 1 },
  viewport: { once: true, amount: 0.5 },
};
