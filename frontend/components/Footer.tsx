import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[var(--dark)] px-20 py-10 space-y-4">
      <div className="flex justify-between flex-col lg:flex-row space-y-7 items-start">
        {_links?.map((item, i) => {
          return (
            <div key={i}>
              <FooterLinks title={item.title} flinks={item.flinks} />
            </div>
          );
        })}
      </div>
      <div className="text-white flex-col lg:flex-row flex justify-between items-center">
        <div className="space-y-3 mb-6 mt-8">
          <h6 className="text-lg font-bold tracking-widest">
            FOLLOW THE FLOCK
          </h6>
          <p className="text-sm">
            {" "}
            offers, a heads up on new things, and sightings of Allbirds in the
            wild. Oh, we have cute sheep, too. #weareallbirds
          </p>
          <div className="flex justify-start space-x-4 items-center">
            <Link href={process.env.INSTA_LINK || ""}>
              <GrInstagram />
            </Link>
            <Link href={process.env.TWITTER_LINK || ""}>
              <BsTwitter />
            </Link>
            <Link href={process.env.FACEBOOK_LINK || ""}>
              <FaFacebookF />
            </Link>
            <Link href={process.env.PINTEREST_LINK || ""}>
              <FaPinterestP />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-sm text-center">
            © 2023 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
            Accessibility
          </p>
          <p className="text-sm underline">Do Not Sell My Personal Information</p>
        </div>
      </div>
    </div>
  );
}

const FooterLinks = ({ title, flinks }: { title: string; flinks: any }) => {
  return (
    <div className="text-white">
      <h2 className="font-extrabold tracking-widest">{title}</h2>
      <ul>
        {flinks?.map((item: { _link: string; nam: string }, i: number) => {
          return (
            <li className="text-sm my-2 hover:underline" key={i}>
              <Link href="/">{item.nam}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const _links = [
  {
    title: "HELP",
    flinks: [
      { _link: "", nam: "1-888-963-8944" },
      { _link: "", nam: "1-814-251-9966 (Text)" },
      { _link: "", nam: "help@allbirds.com" },
      { _link: "", nam: "Returns/Exchanges" },
      { _link: "", nam: "FAQ/Contact Us" },
      { _link: "", nam: "Afterpay" },
    ],
  },
  {
    title: "SHOES",
    flinks: [
      { _link: "", nam: "Men's Shoes" },
      { _link: "", nam: "Women's Shoes" },
      { _link: "", nam: "Men's Apparel" },
      { _link: "", nam: "Women's Apparel" },
      { _link: "", nam: "Socks" },
      { _link: "", nam: "Gift Cards" },
      { _link: "", nam: "Refer a Friend" },
      { _link: "", nam: "Download the Allbirds App" },
    ],
  },
  {
    title: "COMPANY",
    flinks: [
      { _link: "", nam: "Our Stores" },
      { _link: "", nam: "Our Story" },
      { _link: "", nam: "Our Materials" },
      { _link: "", nam: "Sustainability" },
      { _link: "", nam: "Investors" },
      { _link: "", nam: "Shoe Care" },
      { _link: "", nam: "Partnerships" },
      { _link: "", nam: "Product Testing" },
      { _link: "", nam: "Affiliates" },
      { _link: "", nam: "Bulk Orders" },
      { _link: "", nam: "Careers" },
      { _link: "", nam: "Press" },
      { _link: "", nam: "California Transparency Act" },
      { _link: "", nam: "Community Offers" },
    ],
  },
];
