const calendar = document.querySelector(".calendar"),
  calendarHeader = document.querySelector(".calendar_header"),
  calendarDay = document.querySelector(".calendar_day"),
  calendarDate = document.querySelector(".calendar_date");

const getMaxDate = (month) => {
  switch (month + 1) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

const getStartDay = (date, day) => {
  if (date > day) {
    date %= 7;
    if (date === 0) day += 1;
    else day = (day - date + 8) % 7;
  }
  return day;
};

const drawDate = (month, date, day) => {
  const maxDate = getMaxDate(month);
  const startDay = getStartDay(date, day);

  let dateLine = document.createElement("div"); // 달력 줄
  for (let i = 1; i <= startDay + maxDate; i++) {
    const dateEl = document.createElement("div"); // 날짜 칸

    // 달력 맨 처음의 빈 부분
    if (i <= startDay) {
      dateLine.appendChild(dateEl);
      // 날짜 칸
    } else {
      dateEl.innerText = i - startDay;
      // 오늘 날짜 표시
      if (i - startDay === date) dateEl.style.color = "red";
      dateLine.appendChild(dateEl);

      // 달력 줄바꿈
      if (i % 7 === 0) {
        calendarDate.appendChild(dateLine);
        dateLine = document.createElement("div");
      } else if (i === startDay + maxDate) {
        calendarDate.appendChild(dateLine);
      }
    }
  }
};

const drawDay = () => {
  const dayList = ["S", "M", "T", "W", "T", "F", "S"];
  dayList.forEach((day) => {
    const dayEl = document.createElement("div");
    dayEl.innerText = day;
    calendarDay.appendChild(dayEl);
  });
};

const drawHeader = (month) => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  calendarHeader.innerHTML = `${monthList[month]}`;
};

const getDate = () => {
  const now = new Date();

  const month = now.getMonth(),
    date = now.getDate(),
    day = now.getDay();

  drawHeader(month);
  drawDay();
  drawDate(month, date, day);
};

getDate();
