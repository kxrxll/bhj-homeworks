//Get string from DOM.
let actualTimerString = document.getElementById("timer").textContent;

//Create an array from the string separated by ':' symbol.
let actualTimerArray = actualTimerString.split(":");

//Modify array of strings into array of numbers.
actualTimerArray.forEach((element) => {
  parseInt(element);
});

//Function of sending timer in DOM. Made for DRY only.
function showTime() {
  //New array each time for incapsulation.
  let newArray = [];
  //Checking for short numbers in array before the push it to the new one.
  actualTimerArray.forEach((element) => {
    if (`${element}`.length == 1) {
      newArray.push("0" + element);
    } else {
      newArray.push(element);
    }
  });
  //And finally send it to DOM.
  document.getElementById("timer").textContent = newArray.join(":");
}

//Main function for decreasing time.
function timerDecrease() {
  //Logic 1: if hours and minutes equals zero. This is a route to exit the function.
  if (actualTimerArray[0] == 0 && actualTimerArray[1] == 0) {
    if (actualTimerArray[2] > 0) {
      //Seconds decreasing.
      actualTimerArray[2] -= 1;
      showTime();
    } else {
      //Function exit here.
      clearInterval(runningTimer);
      showTime();
      alert("Вы победили в конкурсе!");
      //The best track ever is a prize!
      location.assign(
        "https://dl4s2.mp3ha.org/aHR0cDovL2YubXAzcG9pc2submV0L21wMy8wMDIvNjk4LzAzNy8yNjk4MDM3Lm1wMz90aXRsZT0lRDAlOUMlRDAlQjglRDElODElRDElODIlRDAlQjUlRDElODArJUQwJUI0JUQxJTgzJUQwJUI0JUQwJUI1JUQxJTg2Ky0rMTArJUQxJTg3JUQwJUIwJUQxJTgxJUQwJUJFJUQwJUIyKyVEMCU5QyVEMCVCOCVEMSU4MSVEMSU4MiVEMCVCNSVEMSU4MCVEMCVCMCslRDAlOTQlRDElODMlRDAlQjQlRDElODYlRDAlQjArTm9vQmxhc2UrJTI4bXAzaGEub3JnJTI5Lm1wMw=="
      );
    }
    //Logic 2: decresing minutes and hours.
    //Minutes decresing on zero seconds.
  } else if (actualTimerArray[2] == 0) {
    actualTimerArray[1] -= 1;
    actualTimerArray[2] = "59";
    showTime();
    //Hours decresing on zero minutes.
  } else if (actualTimerArray[1] == 0) {
    actualTimerArray[0] -= 1;
    actualTimerArray[1] = "59";
    showTime();
    //Decreasing seconds.
  } else {
    actualTimerArray[2] -= 1;
    showTime();
  }
}

//Interval ID declaration.
let runningTimer = setInterval(timerDecrease, 10);
