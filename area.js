var today = new Date();
var hourNow = today.getHours();
var greeting;
//18시 보다 크고 22시가 아니면 현재 시간을 띄운다.
//var showHour = hourNow > 18;
//if (hourNow === 22) showHour = false;

if (hourNow > 18 && hourNow !== 22) {
  greeting = today.getHours();
}else if (hourNow > 12) {
  greeting = 'Good evening!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

//document.write('<h3>' + greeting + '</h3>');
console.log(greeting);
