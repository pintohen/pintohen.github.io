import './Home.css';
import {useEffect} from "react";

function Home() {
    useEffect(() => {
        const backToTopButton = document.getElementById('back-to-start');

        if (backToTopButton) {
            backToTopButton.classList.add('not-to-show');
        }

        return () => {
            if (backToTopButton) {
                backToTopButton.classList.remove('not-to-show');
            }
        };
    }, []);

    return (
        <>
            <div className="homeDiv">
                <h1 className="introductionText">
                    Hi! My name is Henrique, welcome! Feel free to visit this website and check out my work. Enjoy!
                </h1>
                <img className="myPicture" src="src/images/myPicture.jpg" alt="Picture of my face"/>
            </div>
        </>
    );
}

export default Home;