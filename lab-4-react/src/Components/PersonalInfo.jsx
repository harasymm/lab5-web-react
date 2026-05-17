function PersonalInfo({ theme }) {
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
            }>Personal Information / Персональна інформація</h2>
        <p>Name: Markiian Harasym</p>
        <p>Email: {""}
              <a href="mailto:harasym@example.com" className={linkStyle}>
              harasym@example.com
            </a>
        </p>
        <p>Phone: <a href="tel:+380123456789" className={linkStyle}>
          +380 123 456 789
        </a></p>  
    </section>
  );
}

export default PersonalInfo;