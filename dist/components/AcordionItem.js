"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const HeaderContainer = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0.8rem 1.2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n\n  //rgba(0,0,0,.3)\n  cursor: pointer;\n  border-bottom: ", ";\n"])), props => props.theme.backgroundHeader, props => props.theme.borderBottom);

const Title = _styled.default.h3(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 1.6rem;\n  margin: 0;\n  font-weight: 700;\n  color: ", ";\n"])), props => props.theme.color);

const Open = _styled.default.svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  fill: ", ";\n  -webkit-transform: translateY(-50%) rotate(-45deg);\n  -moz-transform: translateY(-50%) rotate(-45deg);\n  -ms-transform: translateY(-50%) rotate(-45deg);\n  -o-transform: translateY(-50%) rotate(-45deg);\n  transform: translateY(-50%) rotate(-45deg);\n\n  &.rotate-svg {\n    fill: ", ";\n    -webkit-transform: translateY(-50%) rotate(-90deg);\n    -moz-transform: translateY(-50%) rotate(-90deg);\n    -ms-transform: translateY(-50%) rotate(-90deg);\n    -o-transform: translateY(-50%) rotate(-90deg);\n    transform: translateY(-50%);\n  }\n"])), props => props.theme.color, props => props.theme.color);

const BodyContainer = _styled.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-height: 0;\n  overflow: hidden;\n  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) 0s;\n  background-color: ", ";\n"])), props => props.theme.background);

const Content = _styled.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  opacity: 0;\n  transform: translateY(-1rem);\n  transition-timing-function: linear, ease;\n  transition-duration: 0.1s;\n  transition-property: opacity, transform;\n  transition-delay: 0.5s;\n  padding: 0 1.2rem 1.2rem;\n"])));

const Paragraph = _styled.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding-top: 10px;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 1.3;\n  color: ", ";\n  text-align: center;\n"])), props => props.theme.color);

const AccordionItem = _ref => {
  let {
    data,
    theme
  } = _ref;
  const [opened, setOpened] = (0, _react.useState)(false);
  const {
    title,
    paragraph
  } = data;

  const handleViewQuestion = () => {
    setOpened(!opened);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item, ".concat(opened ? "accordion-item-opened" : null),
    onClick: handleViewQuestion
  }, /*#__PURE__*/_react.default.createElement(HeaderContainer, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(Title, {
    theme: theme
  }, title), /*#__PURE__*/_react.default.createElement(Open, {
    theme: theme,
    id: "thin-x",
    viewBox: "0 0 26 26",
    focusable: "true",
    className: "svg-icon svg-icon-thin-x svg-closed ".concat(opened ? "rotate-svg" : null, " } ")
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
  }))), /*#__PURE__*/_react.default.createElement(BodyContainer, {
    theme: theme,
    className: "accordion-item__inner"
  }, /*#__PURE__*/_react.default.createElement(Content, {
    theme: theme,
    className: "accordion-item__content"
  }, /*#__PURE__*/_react.default.createElement(Paragraph, {
    theme: theme,
    className: "accordion-item__paragraph"
  }, paragraph))));
};

var _default = AccordionItem;
exports.default = _default;