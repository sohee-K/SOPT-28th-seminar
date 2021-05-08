import React from "react";
import Styled from "styled-components";
import LeftOff from "../../assets/LeftOff.svg";
import LeftOn from "../../assets/LeftOn.svg";
import RightOff from "../../assets/RightOff.svg";
import RightOn from "../../assets/RightOn.svg";

const CalendarWrap = Styled.div`
  .calendar {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      height: 61px;

      &--left:hover, &--right:hover {
        cursor: pointer;
      }

      &--number {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;

      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

const Calendar = ({ currYear, setCurrYear, currMonth, setCurrMonth }) => {
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const leftButton = React.useRef();
  const rightButton = React.useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            className="calendar__year--left"
            src={LeftOff}
            alt=""
            onClick={() => setCurrYear(currYear - 1)}
            onMouseEnter={() => (leftButton.current.src = LeftOn)}
            onMouseLeave={() => (leftButton.current.src = LeftOff)}
            ref={leftButton}
          />
          <div className="calendar__year--number">{currYear}년</div>
          <img
            className="calendar__year--right"
            src={RightOff}
            alt=""
            onClick={() => setCurrYear(currYear + 1)}
            onMouseEnter={() => (rightButton.current.src = RightOn)}
            onMouseLeave={() => (rightButton.current.src = RightOff)}
            ref={rightButton}
          />
        </div>
        <div className="calendar__month">
          {monthList.map((month) => {
            return (
              <div
                key={month}
                className="calendar__month--button"
                onClick={() => setCurrMonth(month)}
                style={
                  month === currMonth
                    ? { fontSize: "22px", fontWeight: "bold" }
                    : {}
                }
              >
                {month + 1}월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default Calendar;
