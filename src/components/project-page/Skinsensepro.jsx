export default function Skinsensepro({ children }) {
  return (
    <div className="projects mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]">
      <h1>Skinsence Pro</h1>
      <p>
        SkinSense Pro is your ultimate solution for discovering and managing
        skincare products tailored to your unique needs. With a sleek design and
        intelligent features, it empowers you to make informed decisions about
        your skincare routine. Scan product barcodes to access detailed
        information, explore ingredient insights, and view ratings to ensure the
        products are right for you. Keep track of your favorites and scanned
        items, receive personalized recommendations, and shop with confidence
        through trusted retailers. Whether you’re a skincare novice or a beauty
        enthusiast, SkinSense Pro simplifies your journey to healthier, glowing
        skin. Download now and start your personalized skincare journey today!
      </p>
      <h2>What i did</h2>
      <p>
        I played a pivotal role in the development of the SkinSense Pro app by
        leading its design, ensuring a user-friendly and visually appealing
        interface. I integrated Firebase as the backend to manage data
        seamlessly and implemented robust user authentication for secure access.
        Additionally, I developed the barcode scanning feature, enabling users
        to quickly access product information by simply scanning barcodes. My
        contributions bridged technical functionality with a sleek design,
        delivering a cohesive and efficient skincare assistant app tailored to
        user needs.
      </p>
      <ul>
        <li>java</li>
        <li>xml</li>
        <li>figma</li>
        <li>android</li>
        <li>firebase</li>
      </ul>
      <div className="relative">
        <img
          src="/skinsense-cover.jpg"
          alt="skinsence covcer"
          className="card m-auto"
        />
        <a
          href="https://youtube.com/shorts/x9dly2Enjko?si=ucfUxlAaMuSxzkXn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/play-btn.svg"
            alt="play btn"
            className="absolute md:top-[40%] md:left-[47%] top-[25%] left-[35%] hover:scale-[1.2] duration-300"
          />
        </a>
      </div>
      <div className="phone-images">{children}</div>
    </div>
  );
}
