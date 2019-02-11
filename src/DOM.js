export default function createElement(tag, props, ...children) {
  let element = document.createElement(tag);

  Object.keys(props).forEach(prop => {
    element[prop] = props[prop];
  });

  if (!children.length) return element;

  children.forEach(child => {
    if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    } else {
      element.appendChild(child);
    }
  });

  return element;
}
