import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex items-center mt-5 justify-center md:justify-between md:mx-[10vw] relative">
      <div className="overflow-hidden rounded-full h-[50px] w-[50px]">
        <img src="/main-logo.jpg" alt="main logo" />
      </div>
      <ul className="hidden md:block">
        <li className="flex gap-8">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Skill</a>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <Button className="hidden md:block">Contract Me</Button>
      </div>
    </div>
  );
}
