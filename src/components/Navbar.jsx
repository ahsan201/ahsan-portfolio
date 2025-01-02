import Button from "./Button";

export default function Navbar({ showNavManu = true }) {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex items-center mt-5 justify-center md:justify-between md:mx-[10vw] relative">
      <a href="/">
        <div className="overflow-hidden rounded-full h-[50px] w-[50px]">
          <img src="/main-logo.jpg" alt="main logo" />
        </div>
      </a>
      {showNavManu && (
        <ul className="hidden md:block">
          <li className="flex gap-8">
            <a onClick={() => scrollToSection("work")} href="#work">
              Work
            </a>
            <a onClick={() => scrollToSection("about")} href="#about">
              About
            </a>
            <a onClick={() => scrollToSection("skill")} href="#skill">
              Skill
            </a>
            <a onClick={() => scrollToSection("blog")} href="#blog">
              Blog
            </a>
          </li>
        </ul>
      )}
      <div className="flex gap-2">
        <Button className="hidden md:block" btnLink="/contact">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
