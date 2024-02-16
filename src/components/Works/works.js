import React, { useState } from "react";
import "./works.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

const Works = () => {
  // Define state to manage the visibility of all work images
  const [showAllImages, setShowAllImages] = useState(false);

  // Define a function to toggle the visibility of all images
  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
          I'm SADIA , a dedicated and passionate web developer currently
          pursuing a degree in Software Engineering. I have a strong foundation
          in HTML, CSS, JavaScript, Java, C++, and Python. Specializing in both
          frontend and backend development, I create responsive and
          user-friendly web experiences. My skills in problem-solving and clear
          communication ensure the delivery of high-quality projects that
          prioritize functionality and aesthetics.
          <p>
            My journey in web development began during my university studies,
            where I developed a keen interest in building interactive and
            visually appealing websites. I enjoy the problem-solving aspect of
            coding and strive to create elegant solutions that enhance user
            experiences.
          </p>
          <p>
            In addition to my technical skills, I have a keen eye for design and
            a passion for creating intuitive user interfaces. I believe that
            effective communication and collaboration are key to delivering
            successful projects, and I'm always eager to work with diverse teams
            to bring ideas to life.
          </p>
          <p>
            Outside of coding, I enjoy exploring new technologies, attending
            tech meetups, and contributing to projects. I'm also an avid reader
            and love to immerse myself in books related to technology, design,
            and personal development.
          </p>
          <p>
            I'm currently seeking new opportunities to work on exciting projects
            and collaborate with talented teams. Feel free to reach out to me if
            you'd like to connect or discuss potential opportunities.
          </p>
        </span>
        <div className="worksImgs">
          {/* Display only 4 work images */}
          {(showAllImages ? [p1, p2, p3, p4, p5, p6] : [p1, p2, p3, p4]).map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className="worksImg"
              />
            )
          )}
        </div>
        {/* Display the "See More" button only if there are more than 4 images */}
        {!showAllImages && [p1, p2, p3, p4, p5, p6].length > 4 && (
          <button className="worksBtn" onClick={toggleImages}>
            See More
          </button>
        )}
      </section>
    </>
  );
};

export default Works;
