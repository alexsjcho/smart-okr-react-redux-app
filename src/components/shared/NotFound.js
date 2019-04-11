import React from "react";

const gifURL = "https://media.giphy.com/media/xT1Ra4NsEubfoyjvIk/giphy.gif";

export default () => {
  return (
    <div>
      <h1 className="display-4">
        {" "}
        <span className="text-danger">404 Page</span> Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist!</p>
      <img src={gifURL} alt="404-page" />
    </div>
  );
};
