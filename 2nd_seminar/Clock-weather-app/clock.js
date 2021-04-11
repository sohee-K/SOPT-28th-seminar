const digitalTime = document.querySelector(".digital_time"),
  digitalButton = document.querySelector(".digital_button"),
  header = document.querySelector(".header");

const fillZero = (num) => {
  // 문자열로 변환
  num = num + "";
  // 한 자리 수면 앞에 0 붙이기
  if (num.length < 2) {
    return "0" + num;
  } else {
    return num;
  }
};

const getTime = () => {
  const now = new Date();

  let hour = now.getHours(),
    month = now.getMonth(); // 시간, 월만 let으로 지정
  const minute = now.getMinutes(),
    second = now.getSeconds(),
    year = now.getFullYear(),
    day = now.getDate();

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
  month = monthList[month];

  if (hour >= 0 && hour <= 11) {
    if (hour === 0) hour = 12;
    digitalButton.innerHTML = "AM";
  } else {
    if (hour >= 13) hour -= 12;
    digitalButton.innerHTML = "PM";
  }

  return { year, month, day, hour, minute, second };
};

const drawTime = () => {
  const { year, month, day, hour, minute, second } = getTime();

  header.innerHTML = `Today is <span>${day} ${month}</span>, ${year}`;
  digitalTime.innerHTML = `${fillZero(hour)} : ${fillZero(minute)} : ${fillZero(
    second
  )}`;
};

const init = () => {
  setInterval(drawTime, 1000);
};

init();
