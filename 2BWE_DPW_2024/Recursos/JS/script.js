document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function initMap() {
    var location = {lat: -34.397, lng: 150.644}; 

    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });

    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
