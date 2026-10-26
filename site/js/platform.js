// Marks the page "not-windows" when the visitor isn't on a Windows PC, so the CSS can hide the
// Microsoft Store download links (DayFrame only runs on Windows). Loaded without defer in <head> so
// the class is set before the first paint and the badge never flashes. With no JavaScript the
// class is never set and the links stay visible, which keeps the download reachable on Windows.
(function () {
  var data = navigator.userAgentData;
  var isWindows = data && data.platform
    ? data.platform === "Windows"
    : /^Win/.test(navigator.platform || "") || /Windows NT/.test(navigator.userAgent || "");

  if (!isWindows) {
    document.documentElement.classList.add("not-windows");
  }
})();
