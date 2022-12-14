import React from "react";
import { FaReact, FaVuejs, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AllInOneContext } from "../../contexts/AllInOneProvider";

const Courses = () => {
  const courses = useLoaderData();
  const { pageVariants } = useContext(AllInOneContext);

  // Icons Lists
  const icons = [
    <FaReact className="text-blue-700" />,
    <FaVuejs className="text-emerald-500" />,
    <FaAngular className="text-red-700" />,
    <FaNodeJs className="text-green-700" />,
    <SiExpress className="text-red-700" />,
    <SiMongodb className="text-green-700" />,
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="dark:bg-slate-800 dark:text-white pb-20"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <div className="order-2 md:order-1 col-span-12  md:col-span-4 lg:col-span-2 mt-10 md:mt-0">
            <h2 className="text-xl mb-5 font-medium">
              Total Courses: {courses.length}
            </h2>
            <ul className="flex flex-col gap-2 font-bold text-lg">
              {courses.map((course, index) => (
                <li key={course._id}>
                  <NavLink
                    className="flex text-xl transition-colors duration-300 items-center justify-center md:justify-start bg-slate-200 dark:bg-slate-600 dark:text-white dark:hover:bg-blue-800 hover:bg-blue-200 py-3 px-4 rounded-md"
                    to={`/courses/${course._id}`}
                  >
                    <span className="text-3xl">{icons[index]}</span>
                    <span className="pl-5">{course.course_name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Details */}
          <div className="order-1 md:order-2 col-span-12 md:col-span-8 lg:col-span-10 md:border-l-slate-400 md:border-l ml-5">
            <div className=" md:pl-5">
              <img
                src="https://technotronixs.com/assets/front/img/summernote/61be16afc2df9.jpg"
                alt=""
                className="mb-10 rounded-lg"
              />
              <h1 className="text-3xl font-bold text-center py-5 text-slate-800 dark:text-white">
                What is DevSparkle?{" "}
              </h1>
              <p className="py-5 text-lg font-medium text-slate-800 dark:text-white">
                We create simplified and interactive learning experiences.
                Learning web development should be easy to understand and
                available for everyone, everywhere! DevSparkle is a learning
                platform for web developers, covering all the aspects of web
                development.
                <br />
                <br />
                DevSparkle is optimized for learning and training. Examples
                might be simplified to improve reading and learning. Tutorials,
                references, and examples are constantly reviewed to avoid
                errors, but we cannot warrant full correctness of all content.
              </p>
              {/* Course Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 ">
                {/* Card */}
                {courses.map((course, index) => {
                  return (
                    <Link
                      to={`/courses/${course._id}`}
                      key={course._id}
                      className="border transition-colors duration-300 flex flex-col items-center py-5 rounded-lg hover:bg-blue-200 dark:hover:bg-slate-600 cursor-pointer"
                    >
                      <div className="text-8xl">{icons[index]}</div>
                      <h2 className="text-3xl">{course.course_name}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Courses;
