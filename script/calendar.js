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

function upadateResources(data) {
  if (window.ecCalendar) {
    window.ecCalendar.setOption("resources", data);
  }
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
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
      start: "2025-07-23 10:00:00",
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
        address: "200 Campbell Parade, Bondi Beach N",
        careerType: "Care Type xyz",
      },
    },
    {
      resourceId: "2",
      title: "Local Test Event -2",
      start: "2025-07-23 10:00:00",
      end: "2025-07-23 11:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-gray"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "200 Campbell Parade, Bondi Beach N",
        careerType: "Care Type xyz",
      },
    },

    {
      resourceId: "3",
      title: "Local Test Event",
      start: "2025-07-23 09:30:00",
      end: "2025-07-23 13:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-active"],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "200 Campbell Parade, Bondi Beach N",
        careerType: "Care Type xyz",
      },
    },
    {
      resourceId: "4",
      start: "2025-07-23 9:45:00",
      end: "2025-07-23 10:45:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-pink"],
      extendedProps: {
        employeeID: "1001234",
        employeeName: "Diana Alexiou",
        address: "200 Campbell Parade, Bondi Beach N",
        careerType: "Care Type xyz",
      },
    },
    {
      resourceId: "5",
      title: "<h1>Local Test Event - 5</h1>",
      start: "2025-07-23 12:00:00",
      end: "2025-07-23 13:00:00",
      editable: false,
      durationEditable: false,
      eventStartEditable: false,
      className: ["ec-event-yellow "],
      extendedProps: {
        employeeID: "100123",
        employeeName: "Diana Alexiou",
        address: "200 Campbell Parade, Bondi Beach N",
        careerType: "Care Type xyz",
      },
    },
  ];
}

function filterResources(query) {
  const allResources = getResources();
  let filteredResources = allResources;

  if (query) {
    filteredResources = allResources.filter((resource) =>
      resource.name.toLowerCase().includes(query)
    );
  }
  upadateResources(filteredResources);
}

function createSorter() {
  let ascending = true;

  return function () {
    const sorted = getResources().sort((a, b) => {
      const valA = a.name.toLowerCase();
      const valB = b.name.toLowerCase();

      if (valA < valB) return ascending ? -1 : 1;
      if (valA > valB) return ascending ? 1 : -1;
      return 0;
    });

    ascending = !ascending;
    upadateResources(sorted);
  };
}

function renderSearch(info) {
  const sidebarTitle = document.querySelector(".ec-sidebar-title");
  if (!sidebarTitle) return;

  // Create container for search
  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");

  // Create search input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.name = "search-input";
  searchInput.placeholder = "Search resources";
  searchInput.classList.add("search-input");

  // Create search icon (optional)
  const searchIcon = document.createElement("img");
  searchIcon.src = "Assets/icons/search.svg";
  searchIcon.alt = "Search";
  searchIcon.classList.add("search-icon");

  // Create sort btn (optional)
  const sortBtn = document.createElement("button");
  const sortIcon = document.createElement("img");
  sortIcon.src = "Assets/icons/swap.svg";
  sortIcon.alt = "Sort";
  sortBtn.classList.add("sort-btn");
  sortBtn.appendChild(sortIcon);

  // Append input and icon to container
  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);

  // Append search container to sidebar
  sidebarTitle.appendChild(searchContainer);
  sidebarTitle.appendChild(sortBtn);

  const debouncedFilter = debounce((event) => {
    const query = event.target.value.trim().toLowerCase();
    filterResources(query);
  }, 500);

  searchInput.addEventListener("keyup", debouncedFilter);

  const sortClickHandker = createSorter();
  sortBtn.addEventListener("click", sortClickHandker);
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
    headerToolbar: false,
    editable: false,
    durationEditable: false,
    eventStartEditable: false,
    events: getEvents(),
    resources: getResources(),

    dayHeaderFormat: parseDate,
    eventContent: eventDetailsRender,

    // titleFormat: (start, end) => parseDate(start),

    viewDidMount: renderSearch,

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
