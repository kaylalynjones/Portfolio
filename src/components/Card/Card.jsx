import React from 'react';
import Header from '../Header/Header.jsx';
import Info from '../Info/Info.jsx';
import './card.scss';

export default class Card extends React.Component {
  render() {
    var scrollHeight = window.innerHeight * 2,
        ratio = this.props.scrollPosition / scrollHeight,
        rotation = ratio * 180,
        cardTransform = {
          transform: `rotate3d(0, 1, 0, ${rotation}deg)`
        };

    return (
      <div className="card-container">
        <div className="card" style={cardTransform}>
          <div className="front">
            <Header />
          </div>
          <div className="back">
            <Info />
          </div>
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {scrollPosition: React.PropTypes.number};

module.exports = Card;
