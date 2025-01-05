import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="md:mx-[10vw] mx-5 mt-[7.5rem] md:mt-[10rem]">
      <NewsletterForm />
      <div>
        <h4 className="text-[1.5rem] font-semibold">about the website</h4>
        <p className="text-[#929292]">
          Welcome to my portfolio! This site showcases my journey as a
          full-stack web developer, highlighting the projects I’ve worked on,
          the skills I’ve honed, and my passion for creating innovative digital
          solutions. Dive in to explore my work and see how creativity meets
          functionality!
        </p>
      </div>
      <div>
        <h4 className="text-[1.5rem] font-semibold">this site</h4>
        <div className="flex flex-wrap max-w-[200px] mt-4">
          <div>
            <a href="#">
              <img src="/home-icon.svg" alt="home icon" />
              Home
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/profile-icon.svg" alt="profile icon" />
              about me
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/contact-me-icon.svg" alt="contact icon" />
              contact me
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/my-cv-icon.svg" alt="cv icon" />
              my cv
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/blog-icon.svg" alt="blog icon" />
              blog
            </a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-[1.5rem] font-semibold">i am here</h4>
        <div className="flex flex-wrap max-w-[200px] mt-4">
          <div>
            <a href="#">
              <img src="/github-icon.svg" alt="github icon" /> github
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/linkedin-icon.svg" alt="linkedin icon" /> linkedin
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/twitter-icon.svg" alt="twitter icon" /> twitter
            </a>
          </div>
          <div>
            <a href="#">
              <img src="/instagram-icon.svg" alt="instagram icon" /> instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
