import { useEffect } from 'react';

import './Home.css';

function Home(props: {title: string}) {
  useEffect(() => {
    document.title = props.title;

    let backToStartButton = document.getElementById("back-to-start");
    if (backToStartButton) {
      backToStartButton.style.display = "none";
    }

    // Cleanup function
    return () => {
      if (backToStartButton) {
        backToStartButton.style.display = "none";
      }
    };
  }, [props.title]);

  return (
    <>
        <div className="homeDiv">
          <h1 className="introductionText">
              Hi! My name is Henrique, welcome! Feel free to visit this website and check out my work. Enjoy!
          </h1>
          <img className="myPicture" src="src/images/myPicture.jpg" alt="Picture of my face" />
        </div>
    </>
  );
}

export default Home;