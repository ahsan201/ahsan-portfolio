import Button from "./Button";
export default function Header() {
  return (
    <div className=" flex flex-col md:flex-row items-center md:mx-[10vw] mx-5 mt-[6rem]">
      <div>
        <h1 className="text-[3rem] md:text-[6rem] font-semibold leading-none">
          Hi, I’m Ahsan
        </h1>
        <p className="text-[#808080] mt-4 text-[14px] md:text-4">
          A developer based in the beautiful city of Kamloops, British Colombia.
          I’m on a journey to build the next big thing. hehe!
        </p>
        <p className="text-[12px] font-bold mt-2 md:text-[20px] md:font-semibold">
          CS major at Thompson Rivers University <span>•</span> web developer
        </p>
        <Button className="md:hidden mt-2 mr-2">My CV</Button>
        <Button className="md:hidden" type="secondary">
          Contract Me
        </Button>
      </div>
      <div className="overflow-hidden pb-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/header-video.mp4"
          type="video/quicktime"
          className=" mt-[8rem] md:mt-6 scale-[1.8] md:scale-[1] pointer-events-none mix-blend-screen"
        ></video>
      </div>
    </div>
  );
}
