import React from "react";
import Styled from "styled-components";
import EmptyImage from "../../assets/Image.svg";

const CardWrap = Styled.div`
  .card {
    box-sizing: border-box;
    width: 220px;
    height: 257px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    &:hover {
      cursor: pointer;
    }
    
    &__image {
      width: 220px;
      height: 148px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      background-color: #C4C4C4;
      display: flex;
      justify-content: center;
      align-items: center;

      &--photo {
        width: inherit;
        height: inherit;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    &__top {
      margin: 9px 12px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &--weather {
        color: #CEA0E3;
      }
    }

    &__title {
      font-size: 18px;
      height: 25px;
      margin: 0 12px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__tags {
      margin: 9px 12px;
      margin-right: 5px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #CEA0E3;

      &--tag {
        font-size: 14px;
        color: white;
        background-color: #CEA0E3;
        padding: 4px 11px;
        border-radius: 5px;
        margin-right: 7px;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
}
`;

const getDateFormat = (date) => {
  const month = parseInt((date % 10000) / 100);
  const day = date % 100;
  return `${month}월 ${day}일`;
};

const Card = ({ props }) => {
  const { date, title, image, weather, tags } = props;

  return (
    <CardWrap>
      <div className="card">
        <div className="card__image">
          {image ? (
            <img
              className="card__image--photo"
              width="200"
              height="200"
              src={image}
              alt=""
            />
          ) : (
            <img className="card__image--empty" src={EmptyImage} alt="" />
          )}
        </div>
        <div className="card__top">
          <div className="card__top--date">{getDateFormat(date)}</div>
          <div className="card__top--weather">{weather}</div>
        </div>
        <div className="card__title">{title ? title : "제목 없음"}</div>
        <div className="card__tags">
          {tags.map((tag, index) => {
            return (
              <div key={index} className="card__tags--tag">
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </CardWrap>
  );
};

export default Card;
