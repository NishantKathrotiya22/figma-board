/****** Custom Dropdown *******/

document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
  const disp = dropdown.querySelector(".value-display");
  const selected = dropdown.querySelector(".dropdown-selected");
  const options = dropdown.querySelectorAll(".dropdown-option");

  selected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // selected.textContent = option.textContent;
      disp.textContent = option.textContent;
      dropdown.classList.remove("open");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});

/****** Btn Clicks *******/
const gridContainerEl = document.querySelector(".grid-container");

document.getElementById("filter-btn").addEventListener("click", () => {
  gridContainerEl.classList.toggle("hide-filter");
});

document.getElementById("filter-close").addEventListener("click", () => {
  gridContainerEl.classList.add("hide-filter");
});

/******* Date Range Picker *********/
$(function () {
  $('input[name="datefilter"]').daterangepicker({
    autoUpdateInput: true,
    locale: {
      cancelLabel: "Cancel",
      format: "DD/MM/YYYY",
    },
    startDate: moment(),
    endDate: moment().add(2, "days"),
    applyButtonClasses: "date-apply-btn",
    cancelButtonClasses: "date-cancel-btn",
  });

  $('input[name="datefilter"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("DD/MM/YYYY") +
          " - " +
          picker.endDate.format("DD/MM/YYYY")
      );

      //Trigger On Click of Apply
      // Do The Task Over here
    }
  );
});
