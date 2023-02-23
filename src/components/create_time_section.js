import { toDomNode } from "../helpers/dom_fns";

const displayTime = (timezoneOffset) => {
  const currentTime = new Date();
  currentTime.setSeconds(currentTime.getSeconds() + timezoneOffset);

  const displayMin = String(currentTime.getUTCMinutes()).padStart(2, "0");
  return `${currentTime.getUTCHours()}:${displayMin}`;
}

export const createTimeSection = (timezoneOffset) => {
  const section = toDomNode(
    `<div class="weather__time">
      <p class="weather__time__clock"></p>
      <p>Local Time</p>
    </div>`
  )

  section.querySelector("p").textContent = displayTime(timezoneOffset);

  return section;
}
