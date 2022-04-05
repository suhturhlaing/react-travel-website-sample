import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
    <h1>Check out these EPIC Destinations!</h1>
    <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
            <CardItem
              src='myeik_island/Done-Naung-Myne-Village.jpeg'
              text='Explore the hidden waterfall deep inside Done Nyaung Mine Village (Myeik, Myanmar)'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='myeik_island/island8.jpeg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Adventure'
              path='/services'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='myeik_island/island9.jpeg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='myeik_island/island10.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='myeik_island/island2.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Cards;