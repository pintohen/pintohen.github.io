import './EndFooter.css';


function EndFooter(){
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-opacity" id="Social">  
        <div className="w3-xlarge">
            <a href="https://github.com/pintohen?tab=repositories" target="_blank"><i className="fa fa-github w3-hover-opacity text-secondary-emphasis footerButton"></i></a>
            <a href="https://www.linkedin.com/in/henrique-pinto-66b714240" target="_blank"><i className="fa fa-linkedin w3-hover-opacity text-secondary-emphasis footerButton"></i></a>
        </div>
        <p id="footerText">Developed by <a href="./" className="footerText text-secondary-emphasis">Henrique Pinto</a>.</p>
    </footer>
  );
}

export default EndFooter;