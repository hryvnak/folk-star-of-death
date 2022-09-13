// ? https://thewebdev.info/2022/05/07/how-to-convert-hex-to-rgba-with-javascript/
export const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
