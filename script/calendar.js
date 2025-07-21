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
    slotWidth: "249",
    slotHeight: "88",
    editable: false,
    durationEditable: false,
    eventStartEditable: false,
    slotHeight: "74px",
    events: [
      {
        resourceId: "1",
        title: "Local Test Event",
        start: "2025-07-21 7:00:00",
        end: "2025-07-21 12:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
      {
        resourceId: "2",
        title: "Local Test Event",
        start: "2025-07-21 8:00:00",
        end: "2025-07-21 12:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
      {
        resourceId: "3",
        title: "Local Test Event",
        start: "2025-07-21 9:00:00",
        end: "2025-07-21 13:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
      {
        resourceId: "4",
        title: "Local Test Event",
        start: "2025-07-21 9:00:00",
        end: "2025-07-21 12:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
      {
        resourceId: "5",
        title: "Local Test Event",
        start: "2025-07-21 12:00:00",
        end: "2025-07-21 13:00:00",
        editable: false,
        durationEditable: false,
        eventStartEditable: false,
      },
    ],
    resources: getResources(),
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

function getResources() {
  var data = [
    {
      id: 1,
      name: "Emma Collins",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R1.jpg",
    },
    {
      id: 2,
      name: "James Fletcher",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R2.jpg",
    },
    {
      id: 3,
      name: "Thomas Bennett",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R3.jpg",
    },
    {
      id: 4,
      name: "Sophie Hayes",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R4.jpg",
    },
    {
      id: 5,
      name: "Lucy Hammond",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R5.jpg",
    },
    {
      id: 6,
      name: "Sophie Hayes",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R6.jpg",
    },
    {
      id: 7,
      name: "Henry Blake",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R7.jpg",
    },
    {
      id: 8,
      name: "Freya Dawson",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R8.jpg",
    },
    {
      id: 9,
      name: "Elliot Brooks",
      totalTime: "244h 29m booked",
      imgUrl: "Assets/profiles/R9.jpg",
    },
  ];

  data.forEach((person) => {
    person.title = {
      html: `
    <div class="person-details">
      <div class="profile-img">
        <img src="${person.imgUrl}" alt="">
      </div>
      <div class="person-info">   
        <h5>${person.name}</h5>
        <p>(${person.totalTime} booked)</p>
      </div>
    </div>
  `,
    };
  });

  return data;
}
