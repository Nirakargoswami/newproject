const size = {
  mobileS: "400px",

  tablet: "768px",
  laptop: "1024px",
};
const DEVICE = {
  mobileS: `(max-width: ${size.mobileS})`,

  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};


export default DEVICE;