function initialize() {

    // Exibir mapa;
    var myLatlng = new google.maps.LatLng(-22.868789, -43.372669);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        zoomControl:false,
        panControl:false,
        mapTypeControl:false,
        scaleControl:false,
        overviewMapControl:false,
        streetViewControl:false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Exibir o mapa na div #mapa;
    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);


    // Marcador;
        var marcadorPersonalizado = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Marechal Hermes,Rio de Janeiro',
    animation: google.maps.Animation.DROP
});


}


// Função para carregamento assíncrono
function loadScript() {
    var script = document.createElement('script');
    script.type ='text/javascript';
    script.src ='http://maps.googleapis.com/maps/api/js?key=AIzaSyDVLYKD1MxzMsjRMLp6HdGgq4KyQR7_eSs&sensor=true_or_false&callback=initialize';

        document.body.appendChild(script);
}

window.onload = loadScript;