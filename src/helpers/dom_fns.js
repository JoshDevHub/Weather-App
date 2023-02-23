export const toDomNode = (rawString) => {
  return document
    .createRange()
    .createContextualFragment(rawString)
    .firstChild;
}

export const createHeading = (level, text) => {
  const heading = document.createElement(`h${level}`);
  heading.textContent = text;
  return heading;
}

export const contentTag = (tag, text, attributes = {}) => {
  const element = document.createElement(tag);
  element.textContent = text;
  Object.entries(attributes).forEach(([attr, val]) => {
    element.setAttribute(attr, val);
  });

  return element;
}
