export const shakingAnim = (angle = 15, dur = 0.5) => {
  return {
    rotate: [-angle, angle, -angle, angle, 0],
    transition: { duration: dur },
  };
};
