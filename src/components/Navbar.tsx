import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

function Navbar() {
    const location = useLocation();

    useEffect(() => {
        const routeToTitle: { [key: string]: string } = {
            '/': 'Home',
            '/about-me': 'About Me',
            '/three-js-demos': 'ThreeJS Demos',
            '/earth-moon-three': 'ThreeJS Earth and Moon',
        };

        document.title = `Henrique Pinto | ${routeToTitle[location.pathname] || 'Page Not Found'}`;
    }, [location.pathname]);


    return (
        <nav id="navbar" className="navbar fixed-top">
            <a className="navbarLinks closingTag">
                &lt;&#47;&gt;
            </a>
            <Link
                to="/"
                className="navbarLinks"
            >
                Home
            </Link>
            <Link
                to="/about-me"
                className="navbarLinks"
            >
                About Me
            </Link>
            <Link
                to="https://github.com/pintohen"
                target="_blank"
                className="navbarLinks"

            >
                My GitHub
            </Link>
            <Link
                to="https://www.linkedin.com/in/henrique-pinto-66b714240"
                target="_blank"
                className="navbarLinks"
            >
                My LinkedIn
            </Link>
            <Link
                to="/three-js-demos"
                className="navbarLinks"
            >
                ThreeJS
            </Link>
        </nav>
    );
}

export default Navbar;