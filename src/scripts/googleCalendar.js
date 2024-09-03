mobiscroll.setOptions({
  locale: mobiscroll.localeEn,
  theme: "socal-blue",
  themeVariant: "light",
  clickToCreate: false,
  dragToCreate: false,
  dragToMove: false,
  dragToResize: false,
  eventDelete: false,
});

var googleCalendarSync = mobiscroll.googleCalendarSync;

var calendars = [
  {
    id: "arthurmurrayboise@gmail.com",
    name: "Newcomer Calendar",
    color: "#ADD8E6",
  },
  {
    id: "rqh7dg215isru8rnmahvvq7gi0@group.calendar.google.com",
    name: "Practice Party Calendar",
    color: "#ffb600",
  },
  {
    id: "bqvmcvstkua4i4g143fcul7ip8@group.calendar.google.com",
    name: "Bronze Calendar",
    color: "#0067cd",
  },
  {
    id: "5bafda42022e13d4441baf5fb3ad87ec1e42aaa323ef6a74e72676cb3472e3ff@group.calendar.google.com",
    name: "Bronze II Calendar",
    color: "#061d37",
  },
];

// var CALENDAR_ID = ["tdj7m8d9o1rumijijsg0n7d5r8@group.calendar.google.com"];
var cont = document.getElementById("google-calendar");
var view = "month";
var calendarIds = calendars.map(function (cal) {
  return cal.id;
});
var firstDay, lastDay;

googleCalendarSync.init({
  apiKey: "AIzaSyAps54bmbMLNUggyw6s2ztosHqIU6babxQ",
  onInit: loadEvents,
});

function loadEvents() {
  loadingEvents(true);
  googleCalendarSync
    .getEvents(calendarIds, firstDay, lastDay)
    .then(function (resp) {
      resp.forEach(function (event) {
        event.resource = event.googleCalendarId;
      });
      calInst.setEvents(resp);
    })
    .catch(onError);
}

function loadingEvents(show) {
  if (show) {
    cont.classList.add("md-loading-events");
  } else {
    cont.classList.remove("md-loading-events");
  }
}

function onError(resp) {
  mobiscroll.toast({
    message: resp.error ? resp.error : resp.result.error.message,
  });
}

var calInst = mobiscroll.eventcalendar("#google-calendar", {
  view: {
    calendar: {
      labels: true,
    },
  },

  exclusiveEndDates: true,
  resources: calendars,
  data: [],
  onPageLoading: function (event) {
    var start = event.month ? event.month : event.firstDay,
      year = start.getFullYear(),
      month = start.getMonth();
    // var start = event.viewStart;
    // var end = event.viewEnd;
    // Calculate dates
    // (pre-load events for previous and next months as well)
    firstDay = new Date(year, month - 1, -7);
    lastDay = new Date(year, month + 2, 14);

    loadEvents(firstDay, lastDay);
    // if (view == "month") {
    //   firstDay = start;
    //   lastDay = end;
    // } else {
    //   firstDay = new Date(
    //     start.getFullYear(),
    //     start.getMonth(),
    //     start.getDate() - 7
    //   );
    //   lastDay = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 7);
    // }
  },

  responsive: {
    xsmall: {
      view: {
        calendar: {
          type: "month",
        },
        agenda: {
          type: "day",
        },
      },
    },
    custom: {
      // Custom breakpoint
      breakpoint: 950,
      view: {
        calendar: {
          labels: "all",
          popover: true,
        },
        onEventClick: function (event, inst) {
          mobiscroll.toast({
            message: event.event.title,
          });
        },
      },
    },
  },
  colors: [
    {
      background: "#EBEBEB",
      recurring: {
        repeat: "weekly",
        weekDays: "SA, SU",
        interval: 1,
      },
    },
  ],
});
