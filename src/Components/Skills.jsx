import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-10 bg-gray-800 relative px-20">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="mt-14">
          <div>
            <div className="flex justify-between items-center">
              <h2 className=" font-semibold">HTML</h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-full mt-2 h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md " />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">CSS3</h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-[85%]  mt-2 h-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md " />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Bootstrap </h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-[80%] h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md " />
          </div>
          <div className="mt-8">
            <div className="flex justify-between  items-center">
              <h2 className="font-semibold">Javascript</h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-[70%] h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md " />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold"> JQuery</h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-[80%] h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md " />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">React JS</h2>
              <p className="text-gray-500">ADVANCED</p>
            </div>
            <span className="w-[70%] h-2 bg-gradient-to-t mt-2 from-blue-500 to-cyan-500 block rounded-md " />
          </div>
        </div>
      </div>
      <section>
        <div className="container  m-auto px-4 py-14">
          <h2 className="text-2xl font-semibold text-center">
            Additional <span className="text-cyan-600">Skills</span>
          </h2>
          <div className="flex  flex-col sm:flex-row justify-between mt-5w-[80%] mt-10 ">
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Git
              </p>
            </div>
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                self Motivation
              </p>
            </div>
            <div>
              <p className="font-bold  mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Quick learning
              </p>
            </div>
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Team Work
              </p>
            </div>
          </div>
          <div className="flex  flex-col sm:flex-row justify-between mt-5w-[80%] mt-3 ">
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Leadership
              </p>
            </div>
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Time Management
              </p>
            </div>
            <div>
              <p className="font-bold  mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                Active Listening
              </p>
            </div>
            <div>
              <p className="font-bold mt-2 before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6  before:absolute relative left-5">
                B2 English
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
