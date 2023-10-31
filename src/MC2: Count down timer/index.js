(() => {
    //https://github.com/piyush-eon/frontend-interview-questions/tree/master/machine-coding-interview-questions/countdown-timer
    let hour = document.querySelector(".hours");
    let min = document.querySelector(".minutes");
    let sec = document.querySelector(".seconds");
    let startBtn = document.getElementsByName("start")[0];
    var interval = null;
  
    const startTimer = () => {
      interval = setInterval(() => {
        timer();
      }, 1000);
    };
  
    startBtn.addEventListener("click", () => {
      startTimer();
    });
  
    const timer = () => {
      if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = "";
        min.value = "";
        sec.value = "";
        clearInterval(interval);
      } else if (sec.value != 0) {
        sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
      } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
      } else if (hour.value != 0 && min.value == 0) {
        min.value = 59;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      }
    };
  })();
  