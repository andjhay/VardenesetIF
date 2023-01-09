export function loadInnebandy(pageData) {
  const timetableContainer = document.querySelector("#timetable");
  timetableContainer.innerHTML = `
      <h3>${pageData[2].title.rendered}</h3>
      ${pageData[2].content.rendered}
    `;
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    table.classList.add("table", "table-striped");
  });
}

export function loadTrim(pageData) {
  const timetableContainer = document.querySelector("#timetable");
  timetableContainer.innerHTML = `
      <h3>${pageData[1].title.rendered}</h3>
      ${pageData[1].content.rendered}
    `;
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    table.classList.add("table", "table-striped");
  });
}

export function loadSvomming(pageData) {
  const timetableContainer = document.querySelector("#timetable");
  timetableContainer.innerHTML = `
      <h3>${pageData[0].title.rendered}</h3>
      ${pageData[0].content.rendered}
    `;
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    table.classList.add("table", "table-striped");
  });
}
