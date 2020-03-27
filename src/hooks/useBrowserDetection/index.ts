export default function useBrowserDetection(agent: NavigatorID['userAgent']) {
  let browser = '';
  // CHROME
  if (agent.indexOf('Chrome') !== -1) {
    browser = 'Google Chrome';
  }
  // FIREFOX
  else if (agent.indexOf('Firefox') !== -1) {
    browser = 'Mozilla Firefox';
  }
  // INTERNET EXPLORER
  else if (agent.indexOf('MSIE') !== -1) {
    browser = 'Internet Explorer';
  }
  // EDGE
  else if (agent.indexOf('Edge') !== -1) {
    browser = 'Edge';
  }
  // SAFARI
  else if (agent.indexOf('Safari') !== -1) {
    browser = 'Safari';
  }
  // OPERA
  else if (agent.indexOf('Opera') !== -1) {
    browser = 'Opera';
  }
  // YANDEX BROWSER
  else if (agent.indexOf('Opera') !== -1) {
    browser = 'Yandex';
  }
  // OTHERS
  else {
    browser = 'Others';
  }

  return browser;
}
