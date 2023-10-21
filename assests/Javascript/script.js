const globalCode = () => {

    var globe = planetaryjs.planet();
    // Load our custom `autorotate` plugin; see below.

    globe.loadPlugin(autorotate(0));
    // The `earth` plugin draws the oceans and the land; it's actually
    // a combination of several separate built-in plugins.
    //
    // Note that we're loading a special TopoJSON file
    // (world-110m-withlakes.json) so we can render lakes.
    globe.loadPlugin(planetaryjs.plugins.earth({
        topojson: { file: './assests/json_data/globe_ECI.json' },
        oceans: { fill: '#0E2954' },
        land: { fill: '#ffffffff' },
        borders: { stroke: '#fff' }
    }));
    // Load our custom `lakes` plugin to draw lakes; see below.
    globe.loadPlugin(lakes({
        fill: '#d2fff2'
    }));
    // The `pings` plugin draws animated pings on the globe.
    globe.loadPlugin(planetaryjs.plugins.pings());
    // The `zoom` and `drag` plugins enable
    // manipulating the globe with the mouse.
    globe.loadPlugin(planetaryjs.plugins.zoom({
        scaleExtent: [100, 300]
    }));
    globe.loadPlugin(planetaryjs.plugins.drag({
        // Dragging the globe should pause the
        // automatic rotation until we release the mouse.
        onDragStart: function () {
            this.plugins.autorotate.pause();
        },
        onDragEnd: function () {
            this.plugins.autorotate.resume();
        }
    }));
    // Set up the globe's initial scale, offset, and rotation.
    globe.projection.scale(300).translate([300, 300]).rotate([-80, -35, 0]);

    // Every few hundred milliseconds, we'll draw another random ping.
    var colors = ['red', 'white', 'blue', 'white'];
    setInterval(function () {
        var lat = Math.random() * 170 - 85;
        var lng = Math.random() * 360 - 180;
        var color = colors[Math.floor(Math.random() * colors.length)];
        globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 10 });
    }, 100);

    var canvas = document.getElementById('rotatingGlobe');
    // Special code to handle high-density displays (e.g. retina, some phones)
    // In the future, Planetary.js will handle this by itself (or via a plugin).
    if (window.devicePixelRatio == 2) {
        canvas.width = 1200;
        canvas.height = 1200;
        context = canvas.getContext('2d');
        context.scale(2, 2);
    }
    // Draw that globe!
    globe.draw(canvas);

    // This plugin will automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
        // Planetary.js plugins are functions that take a `planet` instance
        // as an argument...
        return function (planet) {
            var lastTick = null;
            var paused = false;
            planet.plugins.autorotate = {
                pause: function () { paused = true; },
                resume: function () { paused = false; }
            };
            // ...and configure hooks into certain pieces of its lifecycle.
            planet.onDraw(function () {
                if (paused || !lastTick) {
                    lastTick = new Date();
                } else {
                    var now = new Date();
                    var delta = now - lastTick;
                    // This plugin uses the built-in projection (provided by D3)
                    // to rotate the globe each time we draw it.
                    var rotation = planet.projection.rotate();
                    rotation[0] += degPerSec * delta / 1000;
                    if (rotation[0] >= 180) rotation[0] -= 360;
                    planet.projection.rotate(rotation);
                    lastTick = now;
                }
            });
        };
    };

    // This plugin takes lake data from the special
    // TopoJSON we're loading and draws them on the map.
    function lakes(options) {
        options = options || {};
        var lakes = null;

        return function (planet) {
            planet.onInit(function () {
                // We can access the data loaded from the TopoJSON plugin
                // on its namespace on `planet.plugins`. We're loading a custom
                // TopoJSON file with an object called "ne_110m_lakes".
                var world = planet.plugins.topojson.world;
                lakes = topojson.feature(world, world.objects.ne_110m_lakes);
            });

            planet.onDraw(function () {
                planet.withSavedContext(function (context) {
                    context.beginPath();
                    planet.path.context(context)(lakes);
                    context.fillStyle = options.fill || 'black';
                    context.fill();
                });
            });
        };
    };
};
globalCode();

const out = document.querySelector('.out');
setTimeout(() => {
    out.style.display = 'flex';
    const India = document.querySelector('.in p');
    console.log(India)
    setTimeout(() => {
        India.style.display = 'flex';
    }, 600);
}, 2200);

const marker = document.querySelector('.marker');
console.log(marker)
marker.addEventListener('click', () => {
    location.replace("./quiz.html")
})


// fetch('../datasets/space-track-leo.txt').then(r => r.text()).then(rawData => {
//     const tleData = rawData.replace(/\r/g, '')
//         .split(/\n(?=[^12])/)
//         .filter(d => d)
//         .map(tle => tle.split('\n'));
//     const satData = tleData.map(([name, ...tle]) => ({
//         satrec: satellite.twoline2satrec(...tle),
//         name: name.trim().replace(/^0 /, '')
//     }))
//         //exclude those that can't be propagated
//         .filter(d => !!satellite.propagate(d.satrec, new Date()).position)
//         .slice(0, 2000);

//     //time ticker
//     let time = new Date();
//     (function frameTicker() {
//         requestAnimationFrame(frameTicker);

//         time = new Date(+time + TIME_STEP);
//         timeLogger.innerText = time.toString();

//         // Update satellite positions
//         const gmst = satellite.gstime(time);
//         satData.forEach(d => {
//             const eci = satellite.propagate(d.satrec, time);
//             if (eci.position) {
//                 const gdPos = satellite.eciToGeodetic(eci.position, gmst);
//                 d.lat = satellite.radiansToDegrees(gdPos.latitude);
//                 d.lng = satellite.radiansToDegrees(gdPos.longitude);
//                 d.alt = gdPos.height / EARTH_RADIUS_KM
//             }
//         });

//         world.objectsData(satData);
//     })();
// });