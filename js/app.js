function displayDateTime() {
    var timeElement = document.getElementById('time');
    var dateElement = document.getElementById('date');
    var currentDate = new Date();
  
    var timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
  
    var dateOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
  
    var formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);
    var formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);

    var dateItems = formattedDate.split('/');
    formattedDate = dateItems[1] + '/' + dateItems[0] + '/' + dateItems[2];
  
    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
  }
  
  displayDateTime();
  
  setInterval(displayDateTime, 1000);
  