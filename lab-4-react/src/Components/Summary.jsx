function Summary({ theme }) {
  return (
    <section>
      <h2 className={
            theme === "dark"
              ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5"
              : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5"
          }>
        Summary / Про мене
      </h2>

      <p className="leading-[1.7]">
        Motivated and detail-oriented Computer Science and Computer Systems Security student at LPNU.
      </p>

      <p className="leading-[1.7]">
        Студент Комп'ютерних наук та Безпеки Комп'ютерних Систем Львівської політехніки.
      </p>
    </section>
  );
}

export default Summary;