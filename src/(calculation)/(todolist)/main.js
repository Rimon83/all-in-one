const interactive = () => {
  const dutyInput = document.querySelector("#duty");
  const dateInput = document.querySelector("#date");
  const addButton = document.querySelector("#calculate");
  const showDuty = document.querySelector(".duty_list");
  let dutyAnDate = {
    duty: "",
    date: ""
  };
  let dutyList = [];

  if (dutyList.length === 0) {
    showDuty.innerHTML = `<h3>There is no duty</h3>`;
  }

  if (dutyInput) {
    dutyInput.addEventListener("input", () => {
      dutyAnDate.duty = dutyInput.value;
    });
  }
  if (dateInput) {
    dateInput.addEventListener("input", () => { 
      dutyAnDate.date = dateInput.value;
    });
  }

  const handleAddClick = (event) => {
    event.preventDefault();
    if (dutyAnDate.duty && dutyAnDate.date) {
      dutyList.push({ ...dutyAnDate }); 
      dutyInput.value = "";
      dateInput.value = "";
      dutyAnDate.duty = "";
      dutyAnDate.date = "";
      renderDuties();
    }
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    const index = event.target.value;
    dutyList.splice(index, 1);
    renderDuties();
  };

  const renderDuties = () => {
    let allHtml = "";
    if (dutyList.length === 0) {
      showDuty.innerHTML = `<h3>There is no duty</h3>`;
    } else {
      for (let index = 0; index < dutyList.length; index++) {
        let html = `<div>
          <h4>${dutyList[index].duty}</h4>
          <p>${dutyList[index].date}</p>
          <button class="delete_duty" value="${index}">Delete</button>
        </div>`;
        allHtml += html;
      }
      showDuty.innerHTML = allHtml;
    }

    // Attach delete event listeners after rendering
    const deleteButtons = document.querySelectorAll(".delete_duty");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", handleDeleteClick);
    });
  };

  addButton.addEventListener("click", handleAddClick);

  return () => {
    addButton.removeEventListener("click", handleAddClick);
  };
};

export default interactive;
