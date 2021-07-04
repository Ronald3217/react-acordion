"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./styles.css");

var _react = require("@emotion/react");

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _getTheme = _interopRequireDefault(require("./helper/getTheme"));

var _AcordionItem = _interopRequireDefault(require("./AcordionItem"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Ul = _styled.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0;\n  background-color: ", ";\n  border-radius: 0.4rem;\n  box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06),\n    0 20px 30px -10px rgba(15, 72, 179, 0.2);\n"])), props => props.theme.backgroundUl);

const Li = _styled.default.li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: ", ";\n  padding-bottom: 10px;\n\n  &:last-of-type {\n    border-bottom: none;\n    padding-bottom: 0;\n  }\n"])), props => props.theme.borderBottom);

const Acordion = _ref => {
  let {
    data,
    theme
  } = _ref;
  const lightTheme = {
    background: '#EBF4F8',
    color: '#2C2738',
    text: '#2C2738',
    accent: '#0880AE'
  };
  const selectedtheme = (0, _getTheme.default)(theme);
  return /*#__PURE__*/React.createElement(_react.ThemeProvider, {
    theme: selectedtheme
  }, /*#__PURE__*/React.createElement(Ul, null, data.map((data, key) => {
    return /*#__PURE__*/React.createElement(Li, {
      key: key
    }, /*#__PURE__*/React.createElement(_AcordionItem.default, {
      data: data,
      theme: theme
    }));
  })));
};

var _default = Acordion;
exports.default = _default;