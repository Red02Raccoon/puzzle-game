import React from 'react';

import Game from '../Game';
import { Wrap } from './styles.js';

import img_1 from '../../images/row-1-col-1.jpg';
import img_2 from '../../images/row-1-col-2.jpg';
import img_3 from '../../images/row-1-col-3.jpg';
import img_4 from '../../images/row-1-col-4.jpg';
import img_5 from '../../images/row-2-col-1.jpg';
import img_6 from '../../images/row-2-col-2.jpg';
import img_7 from '../../images/row-2-col-3.jpg';
import img_8 from '../../images/row-2-col-4.jpg';
import img_9 from '../../images/row-3-col-1.jpg';
import img_10 from '../../images/row-3-col-2.jpg';
import img_11 from '../../images/row-3-col-3.jpg';
import img_12 from '../../images/row-3-col-4.jpg';
import img_13 from '../../images/row-4-col-1.jpg';
import img_14 from '../../images/row-4-col-2.jpg';
import img_15 from '../../images/row-4-col-3.jpg';
import img_16 from '../../images/row-4-col-4.jpg';

import mainImage from '../../images/main-image.jpg';

const images = {
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
  img_15,
  img_16,
};

function App() {
  return (
    <Wrap>
      <Game images={images} mainImage={mainImage} />
    </Wrap>
  );
}

export default App;
