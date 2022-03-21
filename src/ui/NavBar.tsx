import * as React from "react";
import * as THREE from 'three';

export interface NavBarProps {
    scene: THREE.Scene,
    skyGeo: THREE.SphereGeometry,
    addTask: CallableFunction,
    removeTask: CallableFunction
}

const Backgrounds: Array<string> = [
    "backgrounds/nebula_background.png",
    "backgrounds/green_nebula.png",
    "backgrounds/subtle.png",
    "backgrounds/interchange_nebula.png"
];

const NavBar = (props: NavBarProps) => {

    const [mobileToggle, setMobileToggle] = React.useState(false);
    const [spinDamocles, setSpinDamocles] = React.useState(false);

    /**
     * Set the world background.
     * 
     * @param string 
     */
    const setBackground = (url: string) => {
        const background = new THREE.TextureLoader().load(url);
        // background.wrapS = THREE.RepeatWrapping;
        // background.wrapT = THREE.RepeatWrapping;
        // background.repeat.set( 4, 4 );

        const material = new THREE.MeshPhongMaterial({ 
            map: background,
        });

        const sky = new THREE.Mesh(props.skyGeo, material);
            sky.material.side = THREE.BackSide;
            props.scene.add(sky);

        console.log("Changing to: " + url);
    };

    // Create Task to Spin the Damocles round.
    const spinDamoclesEvent = () => {
        const damocles = props.scene.getObjectByName("Damocles");

        if (damocles) {
            //damocles.rotation.x += 0.01
            damocles.rotation.y += 0.02
            //damocles.rotation.z += 0.01
        }
    };

    React.useEffect(() => {
        setBackground(Backgrounds[0]);
    }, []);

    React.useEffect(() => {
        if (spinDamocles) {
            props.addTask(spinDamoclesEvent, "spinDamoclesEvent");
        } else {
            props.removeTask("spinDamoclesEvent");
        }

        console.log("effect!");

    }, [spinDamocles]);

    return <nav className="navbar is-transparent is-fixed-bottom">
        <div className="navbar-brand">
            <h1 className="navbar-item is-size-4 has-text-weight-bold is-uppercase">typescript-three-js-test</h1>
            <div id="navbarMobileMenuToggle" className="navbar-burger" data-target="navbarMenu" onClick={() => setMobileToggle(!mobileToggle)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className={"navbar-menu " + (mobileToggle ? "is-active" : "")}>
            <div className="navbar-start">
                <div className="navbar-item has-dropdown has-dropdown-up is-hoverable">
                    <a className="navbar-link" href="#">
                        Set Background
                    </a>
                    <div className="navbar-dropdown is-boxed">
                        {Backgrounds.map((url, i: number) => <a key={"BackgroundDropdown" + i} className="navbar-item" href={url} onClick={(event: any) => { event.preventDefault(); setBackground(url); }}>
                            {url}
                        </a>)}
                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button" href="#" onClick={(event: any) => { event.preventDefault(); console.log("Current scene: ", props.scene); }}>
                                <span className="icon">
                                    <i className="fas fa-download"></i>
                                </span>
                                <span>Dump scene</span>
                            </a>
                        </p>
                        <p className="control">
                            <a id="toggleRotation" className={"button " + (spinDamocles ? "is-danger" : "is-primary")} href="#"  onClick={(event: any) => { event.preventDefault(); setSpinDamocles(!spinDamocles); }}>
                                <span className="icon">
                                    <i className="fas fa-download"></i>
                                </span>
                                <span id="toggleRotationText">{(spinDamocles ? "Stop Rotation..." : "Start Rotation")}</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;
