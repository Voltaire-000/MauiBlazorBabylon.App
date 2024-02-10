function createBabylonScene(canvas) {
    const engine = new BABYLON.Engine(canvas, true);

    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    const material = new BABYLON.StandardMaterial("sphereMaterial", scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    sphere.material = material;

    engine.runRenderLoop(function () {
        scene.render();
    });
}
