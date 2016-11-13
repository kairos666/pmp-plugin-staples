import React from 'react';

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
  "lorem-image": loremImage
};