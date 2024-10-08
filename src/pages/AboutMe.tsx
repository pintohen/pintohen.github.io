import './AboutMe.css';

function AboutMe() {

    return (
        <>
            <div className="aboutMeTextAndImage">
                <img src="src/images/computer-image.png" alt="computer-image.png" id="computer-image"></img>
                <h1 className="aboutMeText">
                    If you're here, you're curious to know a little bit more about me. I am working towards becoming a software enginner, currently studying at <a href="https://www.isep.ipp.pt/Course/Course/26" target="_blank" className="reference"><i>ISEP</i></a> and love the tech industry. To know more about me, check my socials and my <a href="src\cv\Henrique_Pinto_CV.pdf" download target="_blank" className="reference"><i>Curriculum Vitae</i></a>.
                </h1>
            </div>
            <div id="techStacks">
                <h1 className="techStacksTitle">Technologies that I use more often</h1>
                <div className="techImages">
                    {techStacks.map(tech => (
                        <img alt={tech.alt} src={tech.src} />
                    ))}
                </div>
            </div>
        </>
    );
}

const techStacks = [
    {alt: "java", src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"},
    {alt: "spring", src: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"},
    {alt: "jpa", src: "https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=hibernate&logoColor=white"},
    {alt: "dotnet", src: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"},
    {alt: "mysql", src: "https://img.shields.io/badge/MySQL-007396?style=for-the-badge&logo=mysql&logoColor=white"},
    {alt: "oraclesql", src: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"},
    {alt: "maven", src: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white"},
    {alt: "junit", src: "https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white"},
    {alt: "mockito", src: "https://img.shields.io/badge/Mockito-DB4D3F?style=for-the-badge&logo=mockito&logoColor=white"},
    {alt: "git", src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"},
    {alt: "bash", src: "https://img.shields.io/badge/Bash-121011?style=for-the-badge&logo=gnu-bash&logoColor=white"},
    {alt: "powershell", src: "https://img.shields.io/badge/Pwsh-121011?style=for-the-badge&logo=powershell&logoColor=white"},
    {alt: "intellij ultimate", src: "https://img.shields.io/badge/IntelliJ-0055FF?style=for-the-badge&logo=intellij-idea&logoColor=white"},
    {alt: "datagrip", src: "https://img.shields.io/badge/DataGrip-000000?style=for-the-badge&logo=datagrip&logoColor=white"},
    {alt: "vscode", src: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"},
    {alt: "nodejs", src: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"},
    {alt: "react", src: "https://img.shields.io/badge/React-00292A?style=for-the-badge&logo=react&logoColor=61DAFB"},
    {alt: "mongoDB", src: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"}
];



export default AboutMe;