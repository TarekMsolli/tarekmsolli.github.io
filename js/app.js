const CVTOGGLEBUTTON = document.getElementById('cv-toggleButton');
const CV = document.getElementById('cv');

function toggleCV (){
  CV.classList.toggle('popped');
}
// This function displays current time HH:MM and date DD/MM/YYYY seperated into 2 divs 
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

    // By default the date function uses MM/DD/YYYY so we have to rearrange them like this
    var dateItems = formattedDate.split('/');
    formattedDate = dateItems[1] + '/' + dateItems[0] + '/' + dateItems[2];
  
    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
  }


  
  // I have to run the function once before the interval begins or else the time and date wont show until the cycle runs once
  displayDateTime();
  
  setInterval(displayDateTime, 1000);

  CVTOGGLEBUTTON.addEventListener('click', toggleCV)