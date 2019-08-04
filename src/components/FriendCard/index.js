import React from "react";
import "./style.css";
// import space from "../../utils/images/space.gif";
import berries from "../../utils/images/memberBerries.gif"
import styled from "styled-components"



function FriendCard(props) {
  console.log(props)
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-back">
              <img alt="cards" src={props.clicked ? props.image : berries} id={props.id} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FriendCard;

