// @ts-nocheck

/**
 * @typedef {Object} EventCalendar
 * @property {Function} create
 */
/**
 * @type {EventCalendar}
 */
var EventCalendar = window.EventCalendar;

function getById(id) {
  return document.getElementById(id);
}

function createCalendar() {
  const ecEl = getById("ec");
  if (!ecEl || typeof EventCalendar === "undefined") {
    console.error("Calendar container or EventCalendar library not found.");
    return;
  }
  const ec = EventCalendar.create(ecEl, {
    view: "resourceTimelineDay",
    initialView: "resourceTimelineDay",
    editable: false,
    durationEditable: false,
    eventStartEditable: false,
    events: [
      {
        resourceId: "1",
        title: "Local Test Event",
        start: "2025-07-21 10:00:00",
        end: "2025-07-21 12:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
    ],
    resources: [
      {
        id: "1",
        title: "Resource A",
        children: [
          { id: "11", title: "Resource A1" },
          { id: "12", title: "Resource A2" },
        ],
      },
      { id: "2", title: "Resource C" },
      { id: "3", title: "Resource D" },
      { id: "4", title: "Resource D" },
      { id: "5", title: "Resource D" },
      { id: "6", title: "Resource D" },
      { id: "7", title: "Resource D" },
    ],
  });
  window.ecCalendar = ec;
}

window.addEventListener("DOMContentLoaded", function () {
  createCalendar();
  // Today BTN
  var todayBtn = getById("today-btn");
  if (todayBtn) {
    todayBtn.addEventListener("click", function () {
      if (window.ecCalendar) {
        window.ecCalendar.setOption("date", new Date());
      }
      // Sync daterangepicker to today
      if (
        typeof $ !== "undefined" &&
        typeof $.fn.daterangepicker !== "undefined"
      ) {
        var $dateInput = $('input[name="datefilter"]');
        if ($dateInput.length && $dateInput.data("daterangepicker")) {
          var today = moment();
          $dateInput.data("daterangepicker").setStartDate(today);
          $dateInput.data("daterangepicker").setEndDate(today);
          $dateInput.val(
            today.format("DD/MM/YYYY") + " - " + today.format("DD/MM/YYYY")
          );
        }
      }
    });
  }
});
