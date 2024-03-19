import calculateClassroomAverage from "../functions/calculateClassRoomAverage";

const renderTable = (table, data) => {
  data.forEach((element) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdAdd = document.createElement("td");
    const tdAverage = document.createElement("td");
    const inputAverage = document.createElement("input");
    inputAverage.setAttribute("type", "number");
    inputAverage.setAttribute("id", element.id);

    inputAverage.value = element.averageGrade;
    tdId.innerText = element.id;
    tdName.innerText = element.name;
    tdAdd.innerText = element.address;

    inputAverage.onchange = (e) => {
      updateGrade(e, data);
    };

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdAdd);

    tdAverage.appendChild(inputAverage);
    tr.appendChild(tdAverage);

    table.tBodies[0].appendChild(tr);
  });
};

// Iterate w/ For.. to mutatate data & update average
function updateGrade(e, data) {
  for (let x = 0; x < data.length; x++) {
    if (data[x].id == e.target.id) {
      data[x].averageGrade = e.target.valueAsNumber;
      break;
    }
  }

  let average = calculateClassroomAverage(data);
  let p = document.getElementById("totalAverage");
  p.textContent = `The ClassRoom Average ${average}`;
}

export default renderTable;
