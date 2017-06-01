import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {text, title, linkText} = props;
  return (
      <div className="container">
        <div className="card" style={{width: '20rem'}}>
          <img className="card-img-top" src="http://lorempixel.com/400/200" alt="Card cap" />
          <div className="card-block">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
            <a className="btn btn-primary">{linkText}</a>
          </div>
        </div>
      </div>
  );
};

Card.PropTypes = {
  title: PropTypes.String,
  text: PropTypes.String,
  linkText: PropTypes.String
}

Card.defaultProps = {
  title: "Default Title",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
  linkText: "Default -- Go Here"
}

export default Card;
