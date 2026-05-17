function Skills({ theme }) {
    return (
      <section>
       <h2 
        className={
              theme === "dark"
                ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5"
                : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5"
            }     
       >Skills / Навички</h2>
        <ul>
            <li>Programming Languages: JavaScript, Python, Java, C, C++, C#</li>
            <li>Web Development: HTML, CSS, React</li>
            <li>Database Management: MySQL, MongoDB</li>
            <li>Version Control: Git</li>
        </ul>
    </section>
    );
}
export default Skills;