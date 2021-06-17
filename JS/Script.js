/*let add = document.getElementsByClassName("option-1");*/
let variant;

function add() {
    variant = true;
    // alert("lol true");
}

function dell() {
    variant = false;
    //alert("lol false");
}
//create map
//-------------------------------------------------------
function initMap() {
    const myLatlng = { lat: 47.766539, lng: 27.8650387 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatlng,
    });
    // Create the initial InfoWindow.
    //-------------------------------------------------------
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to create a new marker!",
        position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    infoWindow.close();
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        //-------------------------------------------------------
        infoWindow.close();
        const marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
            animation: google.maps.Animation.DROP,
        });
        marker.addListener("click", (mapsMouseEvent) => {
            marker.setMap(null);
        });
        //-------------------------------------------------------
        // Create a new InfoWindow.
        //-------------------------------------------------------
        /*infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );*/
        infoWindow.open(marker);
    });

}




























/*function initMap() {
    const myLatlng = { lat: 47.766539, lng: 27.8650387 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatlng,
    });
    // Create the initial InfoWindow.
    //-------------------------------------------------------
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to create a new marker!",
        position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------
    infoWindow.close();
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        //-------------------------------------------------------
        infoWindow.close();
        if (variant == false) {
            marker.addListener("click", (mapsMouseEvent) => {
                marker.setMap(null);
            });
        }
        const marker = new google.maps.Marker({
            position: mapsMouseEvent.latLng,
            map: map,
            animation: google.maps.Animation.DROP,
        });
        //-------------------------------------------------------
        // Create a new InfoWindow.
        //-------------------------------------------------------
        /*infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        infoWindow.open(marker);
    });

}*/