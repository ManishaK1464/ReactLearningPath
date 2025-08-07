import './UserCard.css'; // Importing the CSS file for styling
import unnamed from '../assets/unnamed.png'; // Importing an image asset
import "./UserCard.css"
import React from 'react'
// variable usercard to hold  the arrow function that return html type returns a div
const UserCard = () => {
  return (
    <div className ="user-container">
      <p id = 'bts'>BTS</p>
      <img id = 'user-img' src={unnamed} alt="BTS Logo" />
      <p id = 'bts2'>BTS is Love</p>
    </div>
  )
}
// export the UserCard component so it can be used in other files
export default UserCard
