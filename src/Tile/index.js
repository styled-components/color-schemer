import React from 'react';
import { findDOMNode } from 'react-dom';
import { invert } from 'polished';
import Clipboard from 'clipboard';
import { Wrapper, Text } from './style';

class Tile extends React.Component {
  state = {
    text: this.props.color,
  };

  // Set the text of the tile temporarily, reverting
  // back to the color after one second
  setText = text => {
    this.setState({
      text: text,
    });
    setTimeout(
      () => {
        this.setState({
          text: this.props.color,
        });
      },
      1000
    );
  };

  componentDidMount() {
    const clipboard = new Clipboard(findDOMNode(this.tile));
    clipboard.on('success', () => {
      this.setText('Copied! 💯');
    });
    clipboard.on('error', function(e) {
      this.setText('Copying failed 😢');
    });
  }

  render() {
    const { color } = this.props;
    return (
      <Wrapper
        bg={color}
        ref={comp => this.tile = comp}
        data-clipboard-text={color}
      >
        <Text color={invert(color)}>{this.state.text}</Text>
      </Wrapper>
    );
  }
}

export default Tile;
