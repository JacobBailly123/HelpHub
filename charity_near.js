
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Extract latitude and longitude from the position object
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                center: userLocation,
                zoom: 12 // Zoom level
            });

            var service = new google.maps.places.PlacesService(map);

            // Perform a nearby search for charities around the user's location
            service.nearbySearch({
                location: userLocation,
                radius: 5000, // Search radius in meters (adjust as needed)
                type: ['charity', 'nonprofit'] 
            }, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    // Loop through the results and create markers for each place
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i], map); // Pass map as argument
                    }
                }
            });
        }, function(error) {
            console.error('Error getting user location:', error);
        });
    } else {
        // If Geolocation API is not supported, display an error message
        console.error('Geolocation is not supported by your browser');
    }
}

// Create a marker for a place and add it to the map
function createMarker(place, map) {
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
}
