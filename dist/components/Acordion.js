"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./styles.css");

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _AcordionItem = _interopRequireDefault(require("./AcordionItem"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Ul = _styled.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0;\n  border-radius: 0.4rem;\n  box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06),\n    0 20px 30px -10px rgba(15, 72, 179, 0.2);\n"])));

const Li = _styled.default.li(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: ", ";\n  padding-bottom: 10px;\n\n  &:last-of-type {\n    border-bottom: none;\n    padding-bottom: 0;\n  }\n"])), props => props.theme.borderBottom);

const Accordion = _ref => {
  let {
    data,
    theme
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Ul, null, data.map((data, key) => {
    return /*#__PURE__*/_react.default.createElement(Li, {
      key: data.title
    }, /*#__PURE__*/_react.default.createElement(_AcordionItem.default, {
      data: data,
      theme: theme
    }));
  }));
};

var _default = Accordion;
exports.default = _default;