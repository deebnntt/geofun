let myLocation

var x = document.getElementById("whereAmI");

x.addEventListener('click', function () {
  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
})

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    myLocation = [position.coords.latitude, position.coords.longitude]
}

function calculateDistance(array1) {
  let absLat = Math.abs(myLocation[0]) - Math.abs(array1[0])
  let absLong = Math.abs(myLocation[1]) - Math.abs(array1[1])
  return Math.hypot(absLat, absLong)
}

function closestFriend(a, b, c) {
  let calculated = [calculateDistance(a), calculateDistance(b), calculateDistance(c)].sort()
  return calculated[0]
}

function farthestFriend(a, b, c) {
  let calculated = [calculateDistance(a), calculateDistance(b), calculateDistance(c)].sort()
  return calculated[-1]
}

function averageDistance() {

}


var getCentroid = function (coord)
{
	var center = coord.reduce(function (x,y) {
		return [x[0] + y[0]/coord.length, x[1] + y[1]/coord.length]
	}, [0,0])
	return center;
}

const jane = [40.779437,-73.963244]
const joe = [40.738527,-74.005363]
const chauncey = [40.729975,-73.980926]
