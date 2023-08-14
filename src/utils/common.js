import { Notification } from "element-ui";

export { debounce, throttle } from "lodash-es";

export function requestFullScreen(element) {
  const docElm = element;

  if (docElm.requestFullScreen) {
    docElm.requestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
}

export function exitFullscreen() {
  const de = window.parent.document;

  if (de.exitFullscreen) {
    de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen();
  } else if (de.msExitFullscreen) {
    de.msExitFullscreen();
  }
}

export function isFullscreen() {
  return document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
}

export function isDef(v) {
  return v !== undefined && v !== null;
}

export function notify(message, type) {
  const params = {
    message,
    duration: 1500,
  };
  const fn = type ? Notification[type] : Notification;
  return fn(params);
}
["success", "warning", "info", "error"].forEach((key) => {
  notify[key] = (message) => {
    return notify(message, key);
  };
});
