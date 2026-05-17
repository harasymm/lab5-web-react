function Projects({ theme }) {

   const linkStyle =
    theme === "dark"
    ? "text-blue-300 hover:underline"
    : "text-[#1d3d72] hover:underline";
    return (
       <section>
       <h2 className={
              theme === "dark"
                ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5"
                : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5"
            }>Learning projects in web / Навчальні проєкти у веб</h2>
         <ul>
            <li>Personal CV-Website, 2023 <a href="https://github.com/harasymm/Resume-html-css3" className={linkStyle}>CV-Repo</a></li>
            <li>Website for Diving company, 2025 <a href="https://github.com/koldovsky/1299-team-02" className={linkStyle}>Diving Company Website</a></li>
            <li>Personal CV-Website labweb LPNU, 2026 <a href="https://github.com/harasymm/lab4-web-react" className={linkStyle}>CV-Repo-LPNU</a> </li>
         </ul>
    </section>
    );
}
export default Projects;