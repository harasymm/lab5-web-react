function SocialMedia({ theme }) {

  const linkStyle =
   theme === "dark"
                ? "underline text-blue-300 font-semibold px-[30px] py-1 hover:text-blue-400"
                : "underline text-[#1d3d72] font-semibold px-[30px] py-1 hover:text-[#0d2557]"
  return (
    <section className="mb--300">
      <h2 className={
              theme === "dark"
                ? "text-blue-300 border-b-2 border-blue-150 pb-[6px] mt-5"
                : "text-[#1d3d72] border-b-2 border-[#1d3d72]/10 pb-[6px] mt-5"
            }>
        Social Media / Соціальні мережі
      </h2>

      <ul className="list-none p-0 mt-2 mb-0 flex flex-wrap gap-3">
        <li>
         <a
            href="https://www.linkedin.com/in/markiian-harasym-843740368"
            className={linkStyle}
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            className={linkStyle}
            href="https://github.com/harasymm"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            className={linkStyle}
            href="https://www.facebook.com/exemple"
          >
            Facebook
          </a>
        </li>

        <li>
          <a
            className={linkStyle}
            href="https://www.instagram.com/exemple/"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
           className={linkStyle}
            href="https://www.twitter.com/exemple/"
          >
            Twitter
          </a>
        </li>
      </ul>
    </section>
  );
}

export default SocialMedia;
