"use client";
import { useState } from "react";
import Link from "next/link";
import { BiSearchAlt2, BiChevronDown } from "react-icons/bi";
import { BsFillPersonFill, BsTwitter } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose, GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <TopBar />
      <MobMenu />

      <div className="lg:flex hidden justify-between items-center py-1 px-2">
        <div>
          <ul className="flex justify-center items-center">
            {leftSideLinks?.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <li className="px-4 text-sm font-semibold tracking-widest hover:underline">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <Link href="/">
            <img src="/images/allbirds-logo.svg" className="h-9" alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center">
            {rightSideLinks?.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <li className="px-4 text-sm font-semibold tracking-widest hover:underline">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const TopBar = () => {
  return (
    <div className="bg-[var(--dark)] flex justify-center items-center py-2">
      <p className="text-white text-xs md:text-xs text-center md:px-0 px-5">
        Need a last-minute Father&#39;s Day gift?{" "}
        <span className="underline"> Find A Store Near You</span> |{" "}
        <span className="underline">Shop Gift Cards</span>
      </p>
    </div>
  );
};

const MobMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<Number>(-1);

  try {
    document?.addEventListener("scroll", () => setOpen(false));
  } catch {}

  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 lg:hidden">
        <div className="flex justify-center items-center">
          <button onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={24} />
          </button>
          <div
            className={`absolute top-0  ${
              open ? "left-0" : "-left-[100%]"
            } duration-500 w-full h-full bg-white py-4 flex flex-col justify-between overflow-hidden`}
          >
            <div>
              <div className="flex justify-end px-3">
                <button className="py-2 px-2" onClick={() => setOpen(!open)}>
                  <GrClose size={24} />
                </button>
              </div>

              <div className="flex flex-col justify-start items-start">
                <div className="border-b-2 w-full">
                  <button
                    onClick={() =>
                      setTab((prevIndex) => (prevIndex === 0 ? -1 : 0))
                    }
                    className={`${
                      tab === 0 && "bg-gray-100"
                    } text-lg font-semibold tracking-widest py-4 px-5 flex justify-between items-center w-full`}
                  >
                    MEN
                    <BiChevronDown size={25} />
                  </button>
                  <div
                    className={`${tab === 0 ? "block" : "hidden"} bg-gray-100`}
                  >
                    <ul>
                      <Link href="/">
                        <li className="mb-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="mt-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="border-b-2 w-full">
                  <button
                    onClick={() =>
                      setTab((prevIndex) => (prevIndex === 1 ? -1 : 1))
                    }
                    className={`${
                      tab === 1 && "bg-gray-100"
                    } text-lg font-semibold tracking-widest py-4 px-5 flex justify-between items-center w-full`}
                  >
                    WOMEN
                    <BiChevronDown size={25} />
                  </button>
                  <div
                    className={`${tab === 1 ? "block" : "hidden"} bg-gray-100`}
                  >
                    <ul>
                      <Link href="/">
                        <li className="mb-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="mt-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="border-b-2 w-full">
                  <button
                    onClick={() =>
                      setTab((prevIndex) => (prevIndex === 2 ? -1 : 2))
                    }
                    className={`${
                      tab === 2 && "bg-gray-100"
                    } text-lg font-semibold tracking-widest py-4 px-5 flex justify-between items-center w-full`}
                  >
                    KIDS
                    <BiChevronDown size={25} />
                  </button>
                  <div
                    className={`${tab === 2 ? "block" : "hidden"} bg-gray-100`}
                  >
                    <ul>
                      <Link href="/">
                        <li className="mb-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="my-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                      <Link href="/">
                        <li className="mt-2 text-base pl-10 py-2 font-semibold">
                          Option 1
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>

                <button className="text-lg font-semibold tracking-widest py-4 pl-5 w-full border-b-2 text-start">
                  SOCKS
                </button>
                <button className="text-lg font-semibold tracking-widest py-4 pl-5 w-full border-b-2 text-start">
                  SUSTAINABILITY
                </button>
                <button className="text-lg font-semibold tracking-widest py-4 pl-5 w-full border-b-2 text-start">
                  RERUN
                </button>
                <button className="text-lg font-semibold tracking-widest py-4 pl-5 w-full border-b-2 text-start">
                  STORES
                </button>
              </div>
            </div>
            <div className="flex justify-center space-x-4 items-center mb-10">
              <Link href={process.env.INSTA_LINK || ""}>
                <GrInstagram color="#C13584" size={23} />
              </Link>
              <Link href={process.env.TWITTER_LINK || ""}>
                <BsTwitter color="#00acee" size={23} />
              </Link>
              <Link href={process.env.FACEBOOK_LINK || ""}>
                <FaFacebookF color="#3b5998" size={23} />
              </Link>
              <Link href={process.env.PINTEREST_LINK || ""}>
                <FaPinterestP color="#c8232c" size={23} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Link href="/">
            <img src="/images/allbirds-logo.svg" className="h-9" alt="" />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link className="flex justify-center items-center" href="/">
            <button>
              <BiSearchAlt2 size={24} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const leftSideLinks = [
  {
    name: "MEN",
    link: "",
  },
  {
    name: "WOMEN",
    link: "",
  },
  {
    name: "KIDS",
    link: "",
  },
  {
    name: "SOCKS",
    link: "",
  },
  {
    name: "SALE",
    link: "",
  },
];
const rightSideLinks = [
  {
    name: "SUSTAINABILITY",
    link: "",
  },
  {
    name: "RERUN",
    link: "",
  },
  {
    name: "STORES",
    link: "",
  },
  {
    name: <BiSearchAlt2 size={24} />,
    link: "",
  },
  {
    name: <BsFillPersonFill size={24} />,
    link: "/login",
  },
];
