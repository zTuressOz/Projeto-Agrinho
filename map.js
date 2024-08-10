
const corpo = document.querySelector('.corpo');
const menu = document.querySelector('.sidebar-menu');
const menuButton = document.querySelector('#checkbox-menu');

menuButton.addEventListener('change', () => {
    menu.classList.toggle('active');
});

function initMap() {
    var map = L.map('map', {
        zoomControl: false // Desabilita os controles de zoom
    }).setView([-22.9068, -43.1729], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

L.control.zoom({
    position: 'bottomright' 
}).addTo(map);



    var markersLayer = L.layerGroup().addTo(map);

    document.getElementById('search-button').addEventListener('click', function() {
        var city = document.getElementById('address-input').value;
        var projectType = document.getElementById('marker-text-select').value;

        if (city) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        var lat = parseFloat(data[0].lat);
                        var lon = parseFloat(data[0].lon);

                        clearMarkers();

                        // Gera uma quantidade aleatória de marcadores entre 1 e 100
                        var markerCount = Math.floor(Math.random() * 100) + 1;
                        generateRandomMarkers(lat, lon, projectType, markerCount);
                        
                        map.setView([lat, lon], 13);
                    } else {
                        alert("Cidade não encontrada.");
                    }
                })
                .catch(err => alert("Erro ao buscar a cidade: " + err));
        } else {
            alert("Por favor, digite uma cidade.");
        }
    });

    function clearMarkers() {
        markersLayer.clearLayers();
    }

    function generateRandomMarkers(lat, lon, projectType, count) {
        // Personaliza o ícone do marcador
        var customIcon = L.icon({
            iconUrl: 'horta-comunitaria.png', // substitua pelo caminho do seu ícone personalizado
            iconSize: [68, 68],         // tamanho do ícone
            iconAnchor: [19, 38],       // ponto de ancoragem do ícone (ponto do ícone que será posicionado no mapa)
            popupAnchor: [0, -38]       // ponto onde a janela pop-up será ancorada no ícone
        });

        for (let i = 0; i < count; i++) {
            // Gera pequenas variações nas coordenadas para espalhar os marcadores
            let randomLat = lat + (Math.random() - 0.5) * 0.1;  // ajuste a escala conforme necessário
            let randomLon = lon + (Math.random() - 0.5) * 0.1;

            let marker = L.marker([randomLat, randomLon], {icon: customIcon}).addTo(markersLayer);
            marker.bindPopup(`<b>${projectType}</b><br>Aqui tem ${projectType.toLowerCase()}.`);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        initMap();
    });
}

initMap();