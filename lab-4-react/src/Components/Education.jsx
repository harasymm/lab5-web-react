function Education({ theme }) {
    return (
      <section>
        <h2 className={
              theme === "dark"
                ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5"
                : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5"
            }>Education / Освіта</h2>
        <ul>
            <li>Bachelor of Science in Computer Science, Lviv Polytechnic National University, 2023-2027</li>
        </ul>
    </section>
    );
}
export default Education;