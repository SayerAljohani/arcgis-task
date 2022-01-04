

require(["esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
    esriConfig.apiKey = 'AAPKdd84198a6c36469abba00f307ae9cb7dwqt2xs7E9ezJmFHg0m95po5zb-dn4hLfDxBNYPQ2EUAVINzglRhaKg2yh61sUGkM'

    const map = new Map({
        basemap: "osm-streets", // Basemap layer service
    });

    const view = new MapView({
        map: map,
        container: "viewDiv", // Div element
        center: [46.71602225763033, 24.638785344695233],
        zoom: 16, // Zoom level
    });

    const graphicsLayer = new GraphicsLayer();

    map.add(graphicsLayer);

    const graphics = []; // for init array graphics

    fetch(remoteGisDataURl)
        .then(response => response.json())
        .then(data => {
            renderPointsOnMap(data)
        })
        .catch(error => {
            console.error('read-json-file:', error)
            renderPointsOnMap(jsDemoListOfPoints)
        })


    // add html form on top of map
    view.ui.add("searchWidgetForm", {
        position: "top-left",
        index: 2
    });

    // init elements of DOM
    view.when(function () {
        createEvent("search", searchInMap.bind(null, graphics, graphicsLayer))
        createEvent("clear", clear.bind(null, graphics, graphicsLayer))
        fullDropDown();
    }, function (error) {
        console.error('view.when:', error);
    });


function renderPointsOnMap(data) {
    const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],  // Orange
        outline: {
            color: [255, 255, 255], // White
            width: 1
        }
    };

    // create template
    const popupTemplate = {
        title: "{Name}",
        content: [{
            type: "fields",
            fieldInfos: [{
                fieldName: "Status",
                label: "Status",
            }, {
                fieldName: "Date",
                label: "Date",
            }]
        }]
    }
// generate points from given data
    data.forEach(point => {
        let attributes = {
            Name: point.popup.name,
            Status: point.popup.status,
            Date: point.popup.date
        }
        let _point = { //point #1
            type: "point",
            latitude: point.latitude,
            longitude: point.longitude
        };
        let pointGraphic = new Graphic({
            geometry: _point,
            symbol: simpleMarkerSymbol,
            attributes: attributes,
            popupTemplate: popupTemplate,
        });
        graphics.push(pointGraphic);
    });

    /// add array of graphics
    graphicsLayer.addMany(graphics);
}


});
