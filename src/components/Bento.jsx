export default function Bento() {
  return (
    <div className="lg:mx-[15vw] mx-5 lg:my-[10rem] my-[7.5rem] grid gap-4 bento text-white">
      <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] flex flex-col gap-2 justify-end p-4">
        <img
          src="/JavaScript-logo.jpg"
          alt="javascript logo"
          className="min-w-[70px] js-logo absolute rounded-[2rem] top-6 right-4 z-10 "
        />
        <img
          src="/react-logo.jpg"
          alt="react logo"
          className="min-w-[70px] absolute rounded-[2rem] top-4 right-4 z-10"
        />

        <div className="bento-card-gradient"></div>
        <h4 className="text-2xl font-semibold z-10">
          Climbing the web dev ladder{" "}
        </h4>
        <p className="z-10">
          Climbing the web dev ladder, one project at a time. Turning challenges
          into stepping stones for growth and innovation.
        </p>
      </div>
      <div className="relative min-w-[120px] min-h-[350px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-4">
        <p className="z-10 font-semibold bento-text-opacity">
          Bs in Computer Science{" "}
        </p>
        <h4 className="z-10 text-2xl font-semibold">
          Thompson Rivers University
        </h4>
        <div className="bento-card-gradient"></div>
      </div>
      <div className="relative min-w-[120px] min-h-[350px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-4 z-10">
        <p className="absolute z-10 top-[30%] left-[12%] text-5 md:text-[2rem] font-semibold p-2 bg-red-500 rounded-lg whitespace-nowrap yt-sub">
          400K SUBS
        </p>
        <h4 className="text-2xl font-semibold z-10">
          Youtuber in my home country{" "}
        </h4>
        <div className="bento-card-gradient"></div>
      </div>
      <div className="relative  min-w-[120px] min-h-[350px] flex flex-col justify-end p-4 overflow-hidden rounded-[2rem]">
        <h4 className="text-2xl font-semibold z-[12]">My Photography</h4>
        <img
          src="/photography.jpg"
          alt="photography image"
          className="w-full h-full absolute top-0 left-0 photography object-cover"
        />

        <div></div>
        <div className="bento-card-gradient"></div>
      </div>
      <div className="relative min-w-[120px] min-h-[350px] flex flex-col justify-end p-4 overflow-hidden rounded-[2rem]">
        <img
          src="/telus-logo.jpg"
          alt="telus logo"
          className="absolute telus-logo scale-[.7] md:scale-1 overflow-hidden rounded-xl  inset-0 m-auto"
        />
        <h4 className="text-2xl font-semibold z-10">Working as a D2D Sales </h4>
        <div className="bento-card-gradient"></div>
      </div>
      <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] bg-black flex flex-col justify-end p-4 grid-background">
        <img
          src="/figma-logo.jpg"
          alt="figma logo"
          className="absolute z-10 overflow-hidden rounded-xl top-6 right-6"
        />
        <img
          src="/cursor-1.svg"
          alt="comment cursor icon"
          className="absolute cursor-1 right-0 top-[40%] z-10"
        />
        <img
          src="/cursor-2.svg"
          alt="comment cursos icon"
          className="absolute cursor-2 bottom-[35%] right-[30%] sm:right-10 sm:top-[60%] z-10"
        />
        <div className="design-box1"></div>
        <div className="design-box2"></div>
        <h4 className="text-2xl font-semibold z-10">
          Obsessed with Designing{" "}
        </h4>
        <p className="z-10">
          Obsessed with designing and bringing creativity to life. Every detail
          matters when crafting something extraordinary.
        </p>
        <div className="bento-card-gradient"></div>
      </div>
    </div>
  );
}
