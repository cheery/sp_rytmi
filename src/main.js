vuoto = {};

$(function(){
    var renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    $('body').append(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
    camera.position.z = 100;

    scene = new THREE.Scene();
    scene.add(camera);

    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});

    // set up the sphere vars
    var radius = 50,
        segments = 32,
        rings = 32;

    // create a new mesh with
    // sphere geometry - we will cover
    // the sphereMaterial next!
    var sphere = new THREE.Mesh(

      new THREE.SphereGeometry(
        radius,
        segments,
        rings),

      sphereMaterial);

    // add the sphere to the scene
    scene.add(sphere);

    // create a point light
    var pointLight = new THREE.PointLight(0xFFFFFF);

    // set its position
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;

    // add to the scene
    scene.add(pointLight);

    var animate = function() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();

});
