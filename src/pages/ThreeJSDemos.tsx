import {Link} from "react-router-dom";
import './ThreeJSDemos.css';

function ThreeJSDemos() {
    return (
        <>
            <div>
                <h1 id="threejs-routes-title">ThreeJS Demos</h1>
                <div id="cards-container">
                    {routes.map((route, index) => (
                        <Card
                            title={route.title}
                            image={route.image}
                            route={route.route}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

function Card(props: CardProps) {
    return (
        <Link
            to={props.route}
            style={{textDecoration: 'none'}}
        >
            <div className="route-card">

                <img
                    src={props.image}
                    alt={props.image}
                    className="route-image"
                />
                <h2
                    className="route-title"
                >
                    {props.title}
                </h2>
            </div>
        </Link>
    );
}

const routes: CardProps[] = [
    {
        title: 'Earth & Moon',
        image: 'src/images/three-routes/earth-moon.png',
        route: '/earth-moon-three',
    },
    {
        title: 'Under development... ',
        image: 'src/images/three-routes/coming-soon.jpg',
        route: '/three-js-demos',
    },
    {
        title: 'Under development... ',
        image: 'src/images/three-routes/coming-soon.jpg',
        route: '/three-js-demos',
    },
    {
        title: 'Under development... ',
        image: 'src/images/three-routes/coming-soon.jpg',
        route: '/three-js-demos',
    },
];

interface CardProps {
    title: string;
    image: string;
    route: string;
}

export default ThreeJSDemos;