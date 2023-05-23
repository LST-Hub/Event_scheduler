const schedule = require("node-schedule");

// start date, end date, no end date (checkbox)
const scheduleRealTimeEvent = (req, res) => {
  const { date, time } = req.body;
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  console.log(day, month);

  schedule.scheduleJob(`* * ${day} ${month} *`, function () {
    console.log("Schedule Single Event", new Date());
  });

  res.status(200).send("scheduled realtime event");
};

// start date, start time, repeat every day (checkbox), end date, no end date (checkbox)
const scheduleSingleEvent = (req, res) => {
  const { startDate, startTime, endDate, repeatEveryDay } = req.body;
  const [year, month, day] = startDate.split("-");
  const [hour, minutes] = startTime.split(":");
  const minute = minutes.split(" ")[0];

  const repeat = repeatEveryDay ? "*" : day;

  schedule.scheduleJob(`${minute} ${hour} ${repeat} ${month} *`, function () {
    console.log("Schedule Single Event", new Date());
  });

  res.status(200).send("scheduled single event");
};

// start date, start time, days, end date, no end date (checkbox)
const scheduleWeeklyEvent = (req, res) => {
  const { startDate, startTime, endDate, days } = req.body;
  const [year, month, day] = startDate.split("-");
  const [hour, minutes] = startTime.split(":");
  const minute = minutes.split(" ")[0];
  const dayOfWeek = days;
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = weekDays.indexOf(dayOfWeek);

  schedule.scheduleJob(
    `${minute} ${hour} ${day} ${month} ${dayIndex}`,
    function () {
      console.log("Schedule Weekly Event", new Date());
    }
  );

  res.status(200).send("scheduled weekly event");
};

module.exports = {
  scheduleRealTimeEvent,
  scheduleSingleEvent,
  scheduleWeeklyEvent,
};
