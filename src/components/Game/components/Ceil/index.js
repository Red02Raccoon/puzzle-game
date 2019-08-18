import React from 'react';
import PropTypes from 'prop-types';

import { CeilWrap, CeilImg } from './styles.js';

const propTypes = {
  item: PropTypes.string,
  isEmpty: PropTypes.bool,
  isFullImage: PropTypes.bool,
  img: PropTypes.string,
  quantityRows: PropTypes.number,
  handleCeilClick: PropTypes.func,
};

const Ceil = ({ item, isEmpty, isFullImage, img, quantityRows, handleCeilClick }) => (
  <CeilWrap
    isEmpty={isEmpty}
    quantityRows={quantityRows}
    isFullImage={isFullImage}
    onClick={() => handleCeilClick(item)}
  >
    <CeilImg bgImg={img} isVisible={!isEmpty || isFullImage} />
  </CeilWrap>
);

Ceil.propTypes = propTypes;

export default Ceil;
