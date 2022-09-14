import React from "react";
import data from "../db/data.json";
import { useParams } from "react-router-dom";
const Day = () => {
  //data.words 사용
  //console.log(data);
  const params = useParams().id;
  //console.log(params);
  const filtered = data.words.filter((word) => word.day === Number(params));
  return (
    <>
      <h2>Day{params}</h2>
      <table>
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
