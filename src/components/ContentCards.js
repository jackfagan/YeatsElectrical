import React, { Component } from 'react';
import ReactDOM from 'react-dom'


const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

class ContentCards extends React.Component {
  render () {
    const cardsData = [
      {id: 1, title: '', content: 'Domestic Renovations', imgUrl: 'https://unsplash.it/200/200'},
      {id: 2, title: '', content: 'Rewiring', imgUrl: 'https://unsplash.it/201/200'},
      {id: 3, title: '', content: 'Electric Vehicle Charging Points', imgUrl: 'https://unsplash.it/200/201'},
      {id: 4, title: '', content: 'Smart Lighting', imgUrl: 'https://unsplash.it/201/201'},
      {id: 5, title: '', content: 'Electric and Storage Heating', imgUrl: 'https://unsplash.it/202/200'},
      {id: 6, title: '', content: 'Fire Alarm Installations', imgUrl: 'https://unsplash.it/200/199'},
      {id: 7, title: '', content: 'EICRs', imgUrl: 'https://unsplash.it/199/199'},
    ]
    
    return(
      <div className="container">
        <h2 style={{ 'text-align': 'center' }}>
          Our Services
        </h2>
        
        <CardContainer cards={ cardsData } />
      </div>
    );
  }
}


export default ContentCards;