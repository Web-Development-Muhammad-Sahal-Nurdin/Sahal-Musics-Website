/** @format */

$("#audio-control").click(function () {
  if ($("#video-bg").prop("muted")) {
    $("#video-bg").prop("muted", false);
  } else {
    $("#video-bg").prop("muted", true);
  }
});
