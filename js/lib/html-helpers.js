'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loremIpsum = require('lorem-ipsum');

var _loremIpsum2 = _interopRequireDefault(_loremIpsum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***************************************************************
      LOREM IPSUM CONTENT
***************************************************************/
var loremText = function (_React$Component) {
  _inherits(LoremText, _React$Component);

  function LoremText(props) {
    _classCallCheck(this, LoremText);

    // extend props
    props = Object.assign({
      sentenceLowerBound: props['sentence-lower-bound'],
      sentenceUpperBound: props['sentence-upper-bound'],
      paragraphLowerBound: props['paragraph-lower-bound'],
      paragraphUpperBound: props['paragraph-upper-bound'],
      format: 'plain',
      suffix: '<br>'
    }, props);
    return _possibleConstructorReturn(this, (LoremText.__proto__ || Object.getPrototypeOf(LoremText)).call(this, props));
  }

  _createClass(LoremText, [{
    key: 'render',
    value: function render() {
      var generatedText = (0, _loremIpsum2.default)(this.props);

      return _react2.default.createElement(
        'p',
        null,
        generatedText
      );
    }
  }]);

  return LoremText;
}(_react2.default.Component);
loremText.defaultProps = {
  "units": 'paragraphs',
  "sentence-lower-bound": 5,
  "sentence-upper-bound": 12,
  "paragraph-lower-bound": 3,
  "paragraph-upper-bound": 7
};

/***************************************************************
      LOREM IPSUM IMAGE HELPER
***************************************************************/
var loremImage = function (_React$Component2) {
  _inherits(LoremImage, _React$Component2);

  function LoremImage(props) {
    _classCallCheck(this, LoremImage);

    return _possibleConstructorReturn(this, (LoremImage.__proto__ || Object.getPrototypeOf(LoremImage)).call(this, props));
  }

  _createClass(LoremImage, [{
    key: 'render',
    value: function render() {
      var randomImageSrc = 'https://unsplash.it/' + this.props['data-img-width'] + '/' + this.props['data-img-height'] + '/?random&nocache=' + Date.now();

      return _react2.default.createElement('img', _extends({ src: randomImageSrc }, this.props, { className: this.props['add-classes'] }));
    }
  }]);

  return LoremImage;
}(_react2.default.Component);
loremImage.defaultProps = {
  "data-img-width": 200,
  "data-img-height": 200,
  "alt": 'lorem image description'
};

module.exports = {
  "lorem-image": loremImage,
  "lorem-text": loremText
};