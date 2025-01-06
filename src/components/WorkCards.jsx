import Button from "./Button";
const workList = [
  {
    coverImage: "/sitegurdian-cover.jpg",
    title: "Site Guardian",
    shortDescription:
      "Site Guardian ensures construction site safety with real-time monitoring, task assignment, and device tracking, streamlining operations and enhancing security through an intuitive, role-based management platform.",
    page: "/sitegardianproject",
  },
  {
    coverImage: "/skinsense-cover.jpg",
    title: "SkinSense Pro",
    shortDescription:
      "SkinSense Pro is a mobile app that helps users discover and select the right skincare products through barcode scanning, personalized recommendations, and a sleek, user-friendly interface.",
    page: "/skinsenceproproject",
  },
  {
    coverImage: "/luxestudio-cover.jpg",
    title: "Luxe Studio",
    shortDescription:
      "Luxe Studio is a bespoke wedding business offering elegant and personalized services. The website showcases stunning designs, seamless planning, and unforgettable experiences for couples on their special day.",
    page: "/luxestudiosproject",
  },
];
export default function WorkCards() {
  return (
    <div
      id="work"
      className="flex gap-4 flex-col mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]"
    >
      {workList.map((work, index) => (
        <div
          className="flex flex-col lg:flex-row gap-8 items-center card p-2"
          key={index}
        >
          <div>
            <img
              src={work.coverImage}
              alt="work cover image"
              className="lg:max-w-[37.5rem] md:h-[31.25rem] object-cover overflow-hidden rounded-[2rem]"
            />
          </div>
          <div className="h-full flex flex-col gap-4 px-4">
            <h3 className="text-[2.25rem] font-semibold">{work.title}</h3>
            <p className="text-[#808080]">{work.shortDescription}</p>
            <Button
              icon="/open-in-new-window.svg"
              className="mb-[14px]"
              btnLink={work.page}
            >
              View Project
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
