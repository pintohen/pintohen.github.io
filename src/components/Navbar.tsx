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
            {navbarLinks.map((navbarElement, index) => (
                <Link
                    key={index}
                    to={navbarElement.link}
                    target={navbarElement.target}
                    className="navbarLinks"
                >
                    {navbarElement.name}
                </Link>
            ))}
        </nav>
    );
}

const navbarLinks: NavbarElement[] = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About Me',
        link: '/about-me',
    },
    {
        name: 'My GitHub',
        link: 'https://github.com/pintohen',
        target: '_blank'
    },
    {
        name: 'My LinkedIn',
        link: 'https://www.linkedin.com/in/henrique-pinto-66b714240',
        target: '_blank'
    },
    {
        name: 'ThreeJS',
        link: '/three-js-demos',
    },
];

interface NavbarElement {
    name: string;
    link: string;
    target?: string;
}

export default Navbar;