export const toDomNode = (rawString) => {
  return document
    .createRange()
    .createContextualFragment(rawString);
}

export const createHeading = (level, text) => {
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}
