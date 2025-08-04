import { useRef, useState } from "react"; // Đã thêm useState
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Import icon cho các nút điều hướng
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // State để theo dõi project hiện tại trong carousel
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Refs
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Các hàm để điều khiển carousel
  const handleNextProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex + 1) % data.projects.length
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.projects.length) % data.projects.length
    );
  };

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="laptop:mt-20 mt-10">
          <div className="flex flex-col laptop:flex-row items-center justify-between">
            <div className="w-full laptop:w-3/4">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
              >
                {data.headerTaglineOne}
              </h1>
              <h1
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
              >
                {data.headerTaglineTwo}
              </h1>
              <h1
                ref={textThree}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
              >
                {data.headerTaglineThree}
              </h1>
              <h1
                ref={textFour}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold"
              >
                {data.headerTaglineFour}
              </h1>
              <Socials className="mt-5 laptop:mt-10" />
            </div>
            <div className="w-full laptop:w-1/4 flex justify-center mt-10 laptop:mt-0">
              <Image
                src="/images/me.jpg"
                alt="Ảnh chân dung của Tri Huu Bui"
                width={500}
                height={500}
                className="rounded-full object-cover w-60 h-60 tablet:w-80 tablet:h-80 laptop:w-96 laptop:h-96 shadow-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* == BẮT ĐẦU PHẦN CODE ĐÃ ĐƯỢC CẬP NHẬT CHO "WORK" == */}
        {/* ======================================================= */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold text-2xl font-bold mb-4">
            Projects
          </h1>

          {/* Container cho Carousel */}
          <div className="relative flex items-center justify-center mt-5 laptop:mt-10">
            {/* Nút Previous (Trái) */}
            <button
              onClick={handlePrevProject}
              // === BẮT ĐẦU THAY ĐỔI CLASSNAME ===
              className="absolute left-[-10px] md:left-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg 
                   transition-all duration-300 
                   bg-gray-200 text-black hover:bg-black hover:text-white 
                   dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
              // === KẾT THÚC THAY ĐỔI CLASSNAME ===
              aria-label="Previous Project"
            >
              <FaChevronLeft />
            </button>

            {/* Hiển thị một WorkCard tại một thời điểm */}
            <div className="w-full max-w-4xl mx-auto">
              {data.projects.length > 0 && (
                <WorkCard
                  key={data.projects[currentProjectIndex].id}
                  img={data.projects[currentProjectIndex].imageSrc}
                  name={data.projects[currentProjectIndex].title}
                  description={data.projects[currentProjectIndex].description}
                  onClick={() =>
                    window.open(data.projects[currentProjectIndex].url)
                  }
                />
              )}
            </div>

            {/* Nút Next (Phải) */}
            <button
              onClick={handleNextProject}
              // === BẮT ĐẦU THAY ĐỔI CLASSNAME ===
              className="absolute right-[-10px] md:right-[-40px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg 
                   transition-all duration-300 
                   bg-gray-200 text-black hover:bg-black hover:text-white 
                   dark:bg-gray-800 dark:text-white dark:hover:bg-white dark:hover:text-black"
              // === KẾT THÚC THAY ĐỔI CLASSNAME ===
              aria-label="Next Project"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        {/* ======================================================= */}
        {/* == KẾT THÚC PHẦN CODE ĐÃ ĐƯỢC CẬP NHẬT CHO "WORK" == */}
        {/* ======================================================= */}

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}

        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}
        {/* <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
