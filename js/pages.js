export function loadContent(pageData, path) {
  const timetableContainer = document.getElementById("timetable");
  const informationContainer = document.getElementById("information");
  let loadPage;
  pageData.forEach((page) => {
    if (page.link.toLowerCase().includes(path)) {
      loadPage = pageData.indexOf(page);
      if (timetableContainer && pageData[loadPage].link.toLowerCase().includes("treningstider")) {
        timetableContainer.innerHTML = `
      <h3>${pageData[loadPage].title.rendered}</h3>
      ${pageData[loadPage].content.rendered}
    `;
      }
      if (informationContainer && pageData[loadPage].link.toLowerCase().includes("informasjon")) {
        informationContainer.innerHTML = `
      ${pageData[loadPage].content.rendered}
    `;
      }
      const tables = document.querySelectorAll("table");
      if (tables) {
        tables.forEach((table) => {
          table.classList.add("table", "table-striped");
        });
      }
    }
  });
}
