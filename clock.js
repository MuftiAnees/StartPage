  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  function updateTime() {
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes;
    document.getElementById("currentTime").innerHTML = timeString;
  }
    setInterval(updateTime, 1000);