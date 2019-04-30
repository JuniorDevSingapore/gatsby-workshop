import Typography from "typography";
import lawton from "typography-theme-lawton";
import CodePlugin from "typography-plugin-code";

lawton.overrideThemeStyles = ({ rhythm }) => ({
  "a:hover": {
    textDecoration: "none"
  },
  "h1,h2,h3,h4,h5,h6": {
    color: "#222"
  },
  h1: {
    marginBottom: rhythm(2),
    lineHeight: 1.4
  },
  "h2,h3": {
    marginTop: rhythm(1),
    lineHeight: 1.4
  },
  pre: {
    overflowX: "auto"
  },
  code: {
    fontSize: "1rem",
    fontFamily: "Dank Mono, monospace"
  },
  "h1 code, h2 code, h3 code": {
    fontSize: "unset"
  },
  "p + h2, p + h3": {
    marginTop: rhythm(2)
  }
});

const typography = new Typography(lawton);

typography.plugins = [new CodePlugin()];

export default typography;
