"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getTheme = theme => {
  let selectedTheme;

  switch (theme) {
    case 'dark':
      selectedTheme = {
        backgroundHeader: "rgba(0, 0, 0, 0.8)",
        background: "rgba(0, 0, 0, 0.6)",
        backgroundUl: 'transparent',
        color: "#fff",
        borderBottom: ".5px solid #fff"
      };
      break;

    case 'blue':
      selectedTheme = {
        background: "#0e57b7",
        backgroundHeader: '#0e57b7',
        backgroundUl: "transparent",
        color: "#fff",
        borderBottom: ".5px solid #fff"
      };
      break;

    case 'green':
      selectedTheme = {
        background: '#096',
        backgroundHeader: '#004d33',
        backgroundUl: "transparent",
        color: "#fff",
        borderBottom: ".5px solid #fff"
      };

    case 'purple':
      selectedTheme = {
        background: "rgb(158, 134, 255)",
        backgroundHeader: 'rgb(150, 134, 255)',
        backgroundUl: "transparent",
        color: "#fff",
        borderBottom: ".5px solid #fff"
      };
      break;

    default:
      selectedTheme = {
        background: '#fff',
        backgroundHeader: '#fff',
        backgroundUl: 'transparent',
        color: '#000',
        borderBottom: '.5px solid rgba(0, 0, 0, 0.1) '
      };
  }

  return selectedTheme;
};

var _default = getTheme;
exports.default = _default;