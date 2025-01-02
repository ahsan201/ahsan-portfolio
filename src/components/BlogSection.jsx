export default function BlogSection({ blogs }) {
  // Handle the case where there are no blogs
  if (blogs.length === 0) {
    return <p className="text-center">No blogs available.</p>;
  }

  return (
    <div
      id="blog"
      className="flex flex-wrap items-start gap-8 justify-center md:px-[10vw] py-[7.5rem] md:py-[10rem] bg-[#F5F5F5]"
    >
      {blogs.map((blog) => (
        <div key={blog.slug} className="max-w-[300px] flex flex-col gap-2">
          <a href={`/blog/${blog.slug}`}>
            <img
              src={blog.data.image}
              alt={`${blog.data.title} image`}
              className="min-w-[300px] h-[200px] object-cover overflow-hidden rounded-xl"
            />
          </a>
          <h3 className="text-[1.5rem] leading-10 font-semibold">
            {blog.data.title}
          </h3>
          <p>{blog.data.description}</p>
          <a href={`/blog/${blog.slug}`} className="underline">
            READ BLOG
          </a>
        </div>
      ))}
    </div>
  );
}
