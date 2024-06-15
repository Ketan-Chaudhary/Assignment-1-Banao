import React from "react";
import ContentTop from "../ContentTop/ContentTop";

const Content = () => {
  return (
    <section className="ctn-wrapper">
      <div className="ctn-container">
        <div className="top-ctn">
          {" "}
          <ContentTop />{" "}
        </div>
      </div>
    </section>
  );
};

export default Content;
