const sizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default devices;
