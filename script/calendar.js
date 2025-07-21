/// <reference path="libs/event-calendar.d.ts" />

const createCalendar = function () {
  const ec = EventCalendar.create(document.getElementById("ec"), {
    view: "resourceTimelineDay",
    headerToolbar: {
      start: "",
    },

    dayHeaderFormat: {
      weekday: "long",
      day: "numeric",
    },
    editable: false, // disables general editing
    durationEditable: false, // disables resizing
    eventStartEditable: false, // disables dragging
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
        id: 1,
        title: "Resource A",
        children: [
          {
            id: 11,
            title: "Resource A1",
          },
          {
            id: 12,
            title: "Resource A2",
          },
        ],
      },
      {
        id: 2,
        title: "Resource C",
      },
      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },

      {
        id: 3,
        title: "Resource D",
      },
      {
        id: 3,
        title: "Resource D",
      },
    ],
  });
};

window.addEventListener("DOMContentLoaded", () => {
  createCalendar();
});
