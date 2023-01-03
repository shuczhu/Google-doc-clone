import React from 'react';

const style = {
  signin: {
    marginLeft: "40%",
  }
}

const Homepage = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
 <img style={style.signin} src='https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/auth-docs/sign-in-with-twitter-gray.png.twimg.1920.png' />
  </div>
);

export default Homepage;
