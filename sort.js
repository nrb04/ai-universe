let data = [
    { id: 1, info: { date: "2022-01-01" } },
    { id: 2, info: { date: "2021-02-15" } },
    { id: 3, info: { date: "2022-03-10" } }
  ];
  
  data.sort((a, b) => {
    if (a.info.date < b.info.date) {
      return -1;
    }
    if (a.info.date > b.info.date) {
      return 1;
    }
    return 0;
  });
  
  console.log(data);
  

let data = [
  { id: 1, date: "02/15/2022" },
  { id: 2, date: "01/01/2022" },
  { id: 3, date: "03/10/2022" }
];

data.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  if (dateA < dateB) {
    return -1;
  }
  if (dateA > dateB) {
    return 1;
  }
  return 0;
});

console.log(data);
