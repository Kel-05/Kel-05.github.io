const d = new Date();
let hours = d.getHours();

if (hours >= 6 && hours < 12) {
  document.getElementById("welcome").innerHTML = "* Good Morning!";
}
else if (hours >= 12 && hours < 18) {
  document.getElementById("welcome").innerHTML = "* Good Afternoon!";
}
else {
  document.getElementById("welcome").innerHTML = "* Good Evening!";
}
