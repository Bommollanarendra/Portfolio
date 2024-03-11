import React from "react";
import aboutImg from "../assets/images/navjc.jpeg";
import cv from "../assets/images/cv.pdf";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                To be associated with a progressive organization to apply my
                knowledge, skills and to be a part of a team that dynamically
                works towards the growth of the organization. A results- driven,
                customer-focused, articulate and analytical Software Engineer
                who can think out of the box. Strong in design and integration
                problem solving skills. Expert in Frontend Developer.
              </p>
              {/*<div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
                </div>*/}
              <br />
              <br />

              <a href={cv} download>
                <button className="btn-primary px-20">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600  rounded-xl vn"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="py-8 px-20">
        <div className="container m-auto px-4">
          <h2 className="text-2xl font-semibold text-center">
            Education<sapnb className="text-cyan-600"> Qualifications</sapnb>
          </h2>
          <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-0 before:w-1 before:bg-white">
            <div className="pl-24 relative before:w-4  before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
              <p>
                MBA (Hospital Administration) From Acharya Nagarjuna University
                Guntur Andhra pradesh State in 2021.
              </p>
            </div>
            <div className="pl-24 mt-10 relative before:w-4  before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
              <p>
                BSC from Sri Krishnadevaraya university Ananthapur Andhra
                pradesh State in 2017.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
