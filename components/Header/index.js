import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Projects</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {/* {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )} */}
                  {showResume && (
                    <Button
                    // onClick={() =>
                    //   window.open("mailto:hello@chetanverma.com")
                    // }
                    >
                      <a href="https://www.topcv.vn/documents/view/eyJpdiI6IjRBWTUxWi9SSjRxWFdsTWprQ2g2VkE9PSIsInZhbHVlIjoiYjY4UDVRTWZBZThOcktSQmJ6eDRVRHlZa3VtelNrNk9JQ3Rmd2dYb25jOU80NDFZQnFxZ1Rzejc0bWMySTFnN1dGY2dHU05uUU9lbmIwa2J3elQ5cEJSTWY0dktiNzhJdmlHTFp3b05KSG1VSmo4YUxMa3YrV0lFSVQrcmlPaXEiLCJtYWMiOiI1MWRlMzEwOTFmNThkNTYzNTg3NjA0YjZmOTc3NTE5YzBlNmY2NDViMWQyMmY1OWNiOGU3ODBlMjhkYWE5YjY4IiwidGFnIjoiIn0=#toolbar=0&navpanes=0&scrollbar=0">
                        Resume
                      </a>
                    </Button>
                  )}

                  {/* <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button> */}
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {/* {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )} */}
                  {showResume && (
                    <Button
                      // onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  {/* <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button> */}
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Projects</Button>
            {/* <Button onClick={handleAboutScroll}>About</Button> */}
            {/* {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )} */}
            {showResume && (
              <Button
                // onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                <a href="https://www.topcv.vn/xem-cv/B1MIAQcGBVBXU1tRUgcGVQNVBQBQBAQAVw1RUQ078e">
                  My CV
                </a>
              </Button>
            )}

            {/* <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button> */}
            {/* {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )} */}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {/* <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button> */}

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
