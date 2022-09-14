import React from "react";
import data from "../db/data.json";
import { Link } from "react-router-dom";

const DayList = () => {
  // data.day 사용
  //console.log(data);

  return (
    <>
      {data.days.map((day) => {
        return (
          <button key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </button>
        );
      })}
    </>
  );
};

export default DayList;
