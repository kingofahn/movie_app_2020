import React from 'react';
import PropTypes from 'prop-types';

function Food({ name,picture,rating }){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src = {picture} alt = {name}/>
    </div>
  )
}

const foodILike = [

  {
    id : 1, 
    name: 'Samgyeobsal',
    image: 'https://lh3.googleusercontent.com/proxy/_PoQzJSae6vALfnOMAjFOCpUtpoC5m0eImRbmNbI3sIWe_BsLJ55n_IoOGn6neEp7GnNo0ecCKS60B4BFgRdYsM6X9Je0XTo5ThTanFI2OSbES47s61xaMuVJ53MVNaLUbj_8Ma4Hw',
    rating: 4.9
  },
  {
    id : 2,
    name: 'Bibimbab',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg',
    rating: 4.4
  },
  {
    id : 3,
    name: 'kimchi',
    image: 'https://lh3.googleusercontent.com/proxy/tpZHbOijk5nFT5lF99P4g098jDoQ7RMcnwndV0hUoRmzb5cR6jnc8Qp3ZWmte7v5e5SkjypbJJXBqu4qy-jj5fshsLXpXtjA2gk8h9fpFpSTIJi7',
    rating: 5
  }
];

function App() {
  return (
    <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
export default App;
