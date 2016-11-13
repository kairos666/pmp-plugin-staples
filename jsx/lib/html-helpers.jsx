import React from 'react';
import loremIpsum from 'lorem-ipsum';

/***************************************************************
      LOREM IPSUM CONTENT
***************************************************************/
const loremText = class LoremText extends React.Component {
  constructor(props) {
    // extend props
    props = Object.assign({
        sentenceLowerBound: props['sentence-lower-bound'],
        sentenceUpperBound: props['sentence-upper-bound'],
        paragraphLowerBound: props['paragraph-lower-bound'],
        paragraphUpperBound: props['paragraph-upper-bound'],
        format: 'plain',
        suffix: '<br>' 
    }, props);
    super(props);
  }
  
  render() {    
    let generatedText = loremIpsum(this.props);

    return (
      <p>{generatedText}</p>
    );
  }
}
loremText.defaultProps = {
  "count": 1,
  "units": 'paragraphs',
  "sentence-lower-bound": 5,
  "sentence-upper-bound": 12,
  "paragraph-lower-bound": 3,
  "paragraph-upper-bound": 7
};

/***************************************************************
      LOREM IPSUM IMAGE HELPER
***************************************************************/
const loremImage = class LoremImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var randomImageSrc = 'https://unsplash.it/' + this.props['data-img-width'] + '/' + this.props['data-img-height'] + '/?random&nocache=' + Date.now();
    
    return (
      <img src={randomImageSrc} {...this.props} className={this.props['add-classes']} />
    );
  }
}
loremImage.defaultProps = {
  "data-img-width"       : 200,
  "data-img-height"      : 200,
  "alt"                  : 'lorem image description'
};

module.exports = {
  "lorem-image": loremImage,
  "lorem-text": loremText
};