export default function Luxestudios({ children }) {
  return (
    <div className="projects mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]">
      <h1>Luxe Studios</h1>
      <p>
        At Luxe Studio, we specialize in creating unforgettable wedding
        experiences. From elegant decor to seamless planning, we ensure every
        detail of your big day reflects your unique love story. With a passion
        for artistry and a commitment to excellence, Luxe Studio transforms your
        dreams into reality, making your wedding truly magical. Whether you
        envision a grand celebration or an intimate gathering, our team is
        dedicated to curating moments that you and your guests will cherish
        forever.
      </p>
      <h2>What i did</h2>
      <p>
        As the developer of the Luxe Studio website, I took on the challenge of
        creating an engaging and user-friendly platform to showcase our wedding
        photography services. I designed the site to reflect the elegance and
        creativity that Luxe Studio brings to every wedding, ensuring it
        resonates with potential clients. The website features a clean,
        intuitive interface that allows visitors to easily explore our
        portfolio, learn about our services, and connect with us. From front-end
        design to back-end functionality, I handled every aspect of the
        development process, incorporating responsive design principles to
        ensure a seamless experience across devices. This project highlights my
        ability to blend technical expertise with creative vision, demonstrating
        my commitment to delivering high-quality digital solutions tailored to
        specific business needs.
      </p>
      <ul>
        <li>javascript</li>
        <li>html</li>
        <li>css</li>
        <li>firebase</li>
        <li>gsap</li>
      </ul>
      <div>{children}</div>
    </div>
  );
}
