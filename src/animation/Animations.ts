export const hover_bg = {};
export const ViewPort = {
  viewport: { once: true, amount: 0.5 },
  whileInView: { y: 0, x: 0, scale: 1, opacity: 1 },
};
export const Animate = {
  animate: { y: 0, x: 0, scale: 1, opacity: 1 },
};
export const FadeUp = {
  initial: { y: 60, opacity: 0 },
};
export const FadeDown = {
  initial: { y: -60, opacity: 0 },
};
export const FadeRight = {
  initial: { x: 60, opacity: 0 },
};
export const FadeLeft = {
  initial: { x: -60, opacity: 0 },
};
export const Rotate_Scale_Tap = {
  whileTap: { rotateZ: -6, scale: 0.94, transition: { duration: 0.04 } },
};
