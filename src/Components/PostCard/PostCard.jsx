import React from "react";
import CardLayout from "../Card/CardLayout";
// import cardData from "../../assets/cardData.json";

const PostCard = ({ cardData }) => {
  return (
    <section className="innerWidth flex mt-[28px] gap-[105px] post-wrapper">
      <div className="post-left flex flex-col gap-5">
        {" "}
        {cardData.map((card) => (
          <CardLayout key={card.id} card={card} />
        ))}{" "}
      </div>
    </section>
  );
};

export default PostCard;
