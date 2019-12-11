const { app, BrowserWindow, TouchBar } = require("electron");

const { TouchBarLabel } = TouchBar;

const icon = new TouchBarLabel({
  label: "🍺🍺🍺🍺🍻🍺🍺🍺🍺🍻🍺🍺🍺🍺🍻🍺🍺🍺🍺🍻🍺🍺🍺🍺🍻🍺🍺🍺🍺🍻"
});

let changeOrder = str => {
  arrayWithUnicode = Array.from(str);
  arrayWithUnicode.push(arrayWithUnicode.shift());
  return arrayWithUnicode.join("");
};

const touchBar = new TouchBar({ items: [icon] });

let window;

app.once("ready", () => {
  window = new BrowserWindow({
    frame: false,
    width: 0,
    height: 0
  });

  window.loadURL("about:blank");
  window.setTouchBar(touchBar);

  setInterval(() => {
    icon.label = changeOrder(icon.label);
  }, 60);
});
