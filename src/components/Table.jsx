import "./Table.css";
import studentData from "../functions/studentData";
import calculateClassroomAverage from "../functions/calculateClassRoomAverage";
import { useState } from "react";

function Table() {
  let [data, setData] = useState(studentData);
  let [avg, setAvg] = useState(calculateClassroomAverage(data));
  let handleAverageChange = (id, newAverage) => {
    let object = data.find((d) => d.id === id);
    let newObject = { ...object, averageGrade: Number(newAverage) };

    let newData = data.map((item) =>
      item.id === newObject.id ? newObject : item
    );

    setData(newData);
    setAvg(calculateClassroomAverage(newData));
  };

  return (
    <>
      <table id="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <input
                  style={{ width: "3rem" }}
                  type="number"
                  value={item.averageGrade}
                  onChange={(e) => handleAverageChange(item.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Classroom Average</td>
            <td>{avg}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Table;
