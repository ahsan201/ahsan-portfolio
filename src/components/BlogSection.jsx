const blogs = [
  {
    blogImage: "delete-demo.jpg",
    title: "Mastering the Art of Web Design",
    subTitle:
      "How Attention to Detail Transforms Ordinary Sites into Extraordinary Experiences",
  },
  {
    blogImage: "demo-delete-3.jpg",
    title: "The Journey of a Full-Stack Developer",
    subTitle: "From Debugging to Deploying: The Skills That Shape the Future",
  },
  {
    blogImage: "demo-delete.jpg",
    title: "Innovating with Creativity and Code",
    subTitle:
      "Balancing Design and Functionality for Seamless Digital Solutions",
  },
];
export default function BlogSection() {
  return (
    <div className="flex flex-wrap items-start gap-8 justify-center md:px-[10vw] py-[7.5rem] md:py-[10rem] bg-[#F5F5F5] gap-4">
      {blogs.map((blog, index) => (
        <div className="max-w-[300px] flex flex-col gap-2">
          <img
            src={blog.blogImage}
            alt={`${blog.title} image`}
            className="min-w-[300px] h-[200px] object-cover overflow-hidden rounded-xl"
          />
          <h3 className="text-[1.5rem] leading-10 font-semibold">
            {blog.title}
          </h3>
          <p>{blog.subTitle}</p>
          <a href="#" className="underline">
            READ BLOG
          </a>
        </div>
      ))}
    </div>
  );
}
