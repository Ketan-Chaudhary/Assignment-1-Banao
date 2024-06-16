import React from "react";
import CardLayout from "../Card/CardLayout";

const PostCard = () => {
  return (
    <section className="innerWidth flex mt-[28px] gap-[105px] post-wrapper">
      <div className="post-left">
        {" "}
        <CardLayout /> <CardLayout />{" "}
      </div>
    </section>
  );
};

export default PostCard;
