import React, { Component } from 'react';
import { invert } from 'polished';
import cssColors from 'color-name';
import Tiles from '../Tiles';

import { BigTile, Input, Title, ForkBanner, Link, Wrapper } from './style';

let inverted, color;
class App extends Component {
  state = {
    color: '#65daa2',
  };

  changeColor = evt => {
    this.setState({
      color: evt.target.value,
    });
  };

  render() {
    try {
      let temp = cssColors[this.state.color];
      if (temp) {
        temp = `rgb(${temp[0]}, ${temp[1]}, ${temp[2]})`;
      } else {
        temp = this.state.color;
      }
      // This will throw if this.state.color is invalid,
      // leaving us with the old colors if somebody enters
      // an invalid color
      inverted = invert(temp);
      color = temp;
    } catch (err) {}
    return (
      <Wrapper>
        <BigTile bg={color}>
          <Title color={inverted}>Color Schemer</Title>
          <Input
            type="text"
            autoFocus
            value={this.state.color}
            onChange={this.changeColor}
            color={inverted}
          />
        </BigTile>
        <Link href="https://github.com/styled-components/colors-demo">
          <ForkBanner
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            target="_blank"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          />
        </Link>
        <Tiles color={color} />
      </Wrapper>
    );
  }
}

export default App;
