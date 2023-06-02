const TOOLTIP = ['Clicking on the start button will show you a resume of <b>Tarek</b>.', 'Clicking on the searchbar will show you a list of <b>Tarek</b>`s latest work.', '<b>Tarek</b> has a friend called <b>Ahmed</b> who designs video-games check out his <a target="_blank" href="https://carthagea.itch.io/">page</a>.', '<b>Tarek</b> has a talented friend called <b>Ashref</b>, you can visit his site <a target="_blank" href="https://ashref.tn">here</a>.', 'Adding a drop of water next to your pizza slice and heating in it in a pan will make it taste fresh🍕!'];

function toggleCV (target){
  let display = document.getElementById(target);
  // this if statement makes sure that if I open a window the others are closed to avoid overlapping issues
  if (!display.classList.contains('popped')){
    document.querySelectorAll('*').forEach((element) =>{
      element.classList.remove('popped');
    });
  }
  display.classList.toggle('popped');
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

  function toggleRamzi(){
    let ramzi = document.getElementById('ramzi');
    let ramzisays = document.getElementById('ramzi-says');
    if (!ramzi.classList.contains('ramzi-up')){
      ramzisays.innerHTML = TOOLTIP[Math.floor(Math.random()*TOOLTIP.length)];
    }
      ramzi.classList.toggle('ramzi-up');
  }

  
  // I have to run the function once before the interval begins or else the time and date wont show until the cycle runs once
displayDateTime();
  
setInterval(displayDateTime, 1000);


setInterval(toggleRamzi, 5000);