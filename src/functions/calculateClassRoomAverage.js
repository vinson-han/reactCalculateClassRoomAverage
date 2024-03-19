const calculateClassroomAverage = (data) => {
  let sum = data.reduce(
    (accum, currentValue) => accum + currentValue.averageGrade,
    0
  );

  return sum / data.length;
};

export default calculateClassroomAverage;
