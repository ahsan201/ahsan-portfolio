export default function Sitegardian({ children }) {
  return (
    <div className="projects mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]">
      <h1>Site Gardian</h1>
      <p>
        The Site Guardian project is a comprehensive solution addressing safety
        in construction sites by integrating advanced hardware and software. It
        combines a multi-sensor device capable of detecting fire, toxic gases,
        extreme temperatures, and panic situations with a web interface for
        real-time alerts and management. The device uses components like MQ9 gas
        sensors, DHT11 temperature sensors, and Arduino-based systems to collect
        and transmit data to Firebase, enabling immediate action through alarms
        and a user-friendly dashboard. As the backend and database engineer, I
        developed the website using JavaScript, HTML, and CSS, implemented
        Firebase for real-time updates and secure authentication, and ensured
        seamless hardware-software integration for accurate alarm transmission.
      </p>
      <h2>What i did</h2>
      <p>
        I designed the entire UI and developed the website using JavaScript,
        HTML, and CSS. Additionally, I implemented Firebase Realtime Database
        and Authentication for real-time updates and secure access. I also
        worked on integrating the physical device with the platform, using
        Arduino IDE and Python to process sensor data and transmit alarms to
        Firebase, ensuring accurate data transmission.
      </p>
      <ul>
        <li>javascript</li>
        <li>html</li>
        <li>css</li>
        <li>c++</li>
        <li>firebase</li>
      </ul>

      <iframe
        src="https://www.youtube.com/embed/Pgs2mwteLsQ?si=ggnRAk-vKdOVLlW9"
        title="YouTube video player"
        class="w-full aspect-video card"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="images">{children}</div>
    </div>
  );
}
