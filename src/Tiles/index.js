import React from 'react';
import { setLightness } from 'polished';

import Tile from '../Tile';
import { Wrapper } from './style';

export default ({ color }) => {
  return (
    <Wrapper>
      <Tile color={setLightness(0.1, color)} />
      <Tile color={setLightness(0.3, color)} />
      <Tile color={setLightness(0.5, color)} />
      <Tile color={setLightness(0.7, color)} />
      <Tile color={setLightness(0.9, color)} />
    </Wrapper>
  );
};
