import "./Table.css";
import studentData from "../functions/studentData";
import calculateClassroomAverage from "../functions/calculateClassRoomAverage";
import renderTable from "../functions/studentTable.js";

function Table() {
  document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("student-table");
    let average = calculateClassroomAverage(studentData);
    let p = document.getElementById("totalAverage");

    p.textContent = `The ClassRoom Average ${average}`;
    renderTable(table, studentData);
  });

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
        <tbody></tbody>
      </table>
      <p id="totalAverage"></p>
    </>
  );
}
export default Table;
