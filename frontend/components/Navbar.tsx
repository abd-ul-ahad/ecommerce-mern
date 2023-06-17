import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
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
      link: "",
    },
  ];
  return (
    <nav>
      <TopBar />

      <div className="flex justify-between items-center py-1">
        <div>
          <ul className="flex justify-center items-center">
            {leftSideLinks?.map((item, key) => {
              return (
                <Link href={item.link} key={key}>
                  <li className="px-4 text-sm font-semibold tracking-widest">
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
                  <li className="px-4 text-sm font-semibold tracking-widest">
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
      <p className="text-white text-xs">
        Need a last-minute Father's Day gift?{" "}
        <span className="underline"> Find A Store Near You</span> |{" "}
        <span className="underline">Shop Gift Cards</span>
      </p>
    </div>
  );
};
