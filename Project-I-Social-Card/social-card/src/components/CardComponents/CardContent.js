import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div id="cardContent">
      <strong>Get Started with React</strong>
      <p class="content">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <p className="lightGrey">reactjs.org</p>
    </div>
  );
};

export default CardContent;
