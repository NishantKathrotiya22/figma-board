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

function parseDate(date) {
  const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  });
  const weekday = weekdayFormatter.format(date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${weekday} - ${day}-${month}-${year}`;
}

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

function getEvents() {
  return [
    {
      resourceId: "1",
      title: `<h1>Local Test Event</h1>`,
      start: "2025-07-22 10:00:00",
      end: "2025-07-23 12:00:00",
      id: "123",
      type: "Full",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "12, ",
        careerType: "Care Type",
      },
    },
    {
      resourceId: "2",
      title: "Local Test Event -2",
      start: "2025-07-22 10:00:00",
      end: "2025-07-22 11:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "12, ",
        careerType: "Care Type",
      },
    },

    {
      resourceId: "3",
      title: "Local Test Event",
      start: "2025-07-22 09:30:00",
      end: "2025-07-22 13:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "12, ",
        careerType: "Care Type",
      },
    },
    {
      resourceId: "4",
      title: "Local Test Event",
      start: "2025-07-22 9:45:00",

      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "12, ",
        careerType: "Care Type",
      },
    },
    {
      resourceId: "5",
      title: "<h1>Local Test Event - 5</h1>",
      start: "2025-07-22 12:00:00",
      end: "2025-07-22 13:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "12, ",
        careerType: "Care Type",
      },
    },
  ];
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
    events: getEvents(),
    resources: getResources(),

    dayHeaderFormat: (date) => parseDate(date),

    eventContent: (arg) => eventDetailsRender(arg),

    titleFormat: (start, end) => parseDate(start),

    slotMinTime: "9:00:00",
    slotMaxTime: "20:00:00",
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

function eventDetailsRender(arg) {
  return {
    html: `<div class="event-disp">
                <p><span class="event-emp-id">${arg.event.extendedProps.employeeID}</span>${arg.event.extendedProps.employeeName}</p>
                <p>${arg.event.extendedProps.address}</p>
                <p>${arg.event.extendedProps.careerType}</p>
                <p>4h 00m</p>
            </div>`,
  };
}
