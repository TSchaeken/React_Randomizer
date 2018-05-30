import React from 'react';
import styles from './style.css'

const GameCard = props => (
  <div >
    <img src={props.image} style={styles.image} data-id={props.id} alt="A building" onClick={() => props.addToClicked(props.id)}/>
  </div>
);

export default GameCard;
