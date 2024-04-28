import React from 'react';



const mainAbout = {
  width: '100%',
  height: '450px',
  backgroundColor: '#fefbe0'
}

const imageStyle = {
  width: '70%',
  height: '100%'
};


export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div style={mainAbout}>
      {/* Apply different styles based on screen size */}
      <img style={imageStyle} src="https://us.lifelovingfoods.com/wp-content/uploads/2020/12/under-construction-gif-11.gif" alt="" />
      </div>
    </div>
  );
};
