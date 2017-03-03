import React from 'react';
// These are currently not officially exposed, so we import them directly
import parseColor from 'polished/lib/internalHelpers/_parseColorString'
import rgbToHsl from 'polished/lib/internalHelpers/_rgbToHsl'
import hslToHex from 'polished/lib/internalHelpers/_hslToHex'

import Tile from '../Tile';
import { Wrapper } from './style';

export default ({ color }) => {
	const base = rgbToHsl(parseColor(color));
	return (
		<Wrapper>
			<Tile color={hslToHex(base.hue, base.saturation, 0.1)} />
			<Tile color={hslToHex(base.hue, base.saturation, 0.3)} />
			<Tile color={hslToHex(base.hue, base.saturation, 0.5)} />
			<Tile color={hslToHex(base.hue, base.saturation, 0.7)} />
			<Tile color={hslToHex(base.hue, base.saturation, 0.9)} />
		</Wrapper>
	)
}
