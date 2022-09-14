import React from "react";
import data from "../db/data.json";
import { useParams } from "react-router-dom";
const Day = () => {
  //data.words 사용
  //console.log(data);
  const params = useParams().id;
  //console.log(typeof params);
  //params가 문자열로 들어오는 상황이므로 숫자로 변환해야함
  const filtered = data.words.filter((word) => word.day === Number(params));
  return (
    <>
      <h2>Day{params}</h2>
      <table style={{ margin: "auto" }}>
        <tbody>
          {filtered.map((word) => {
            return (
              <tr key={word.id}>
                <td>{word.eng}</td>
                <td>{word.kor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Day;
