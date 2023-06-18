"use client";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

export default function Home() {
  return (
    <section>
      <Hero />
      <div className="bg-[var(--dark)] flex justify-center items-center py-2">
        <p className="text-white space-x-2 text-sm">
          <span className="font-bold">Discover Your Perfect Pair</span>
          <span>Try our Style Quiz to find the best pair fot you.</span>
          <span className="underline">Take the Style Quiz</span>
        </p>
      </div>
      <Favorites />
      <div className="my-5">
        <img src="/images/foot.avif" className="w-full" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-3 py-14">
        <h5 className="text-4xl font-bold">Summer Trips Need Super Packable</h5>
        <h5 className="text-4xl font-bold">Shoes</h5>
        <p>We’ve got your 10,000 steps covered, easy.</p>
        <div className="flex justify-center items-center">
          <button className="bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-12 ml-5 hover:bg-[white] hover:text-[var(--dark)]">
            SHOP MEN
          </button>
          <button className="bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-9 ml-5 hover:bg-white hover:text-[var(--dark)]">
            SHOP WOMEN
          </button>
        </div>
      </div>
      <OnSale />
    </section>
  );
}

const Hero = () => {
  return (
    <div
      className="bg-[url('/images/hero-home.avif')] py-7 bg-cover flex  justify-start items-end text-white"
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <div className="space-y-3 px-6">
        <h4 className="text-6xl font-bold">The Summer Jam</h4>
        <p className="font-semibold">
          The lightweight Tree Runner is ready for anything summer throws at
          you.
        </p>

        <div className="flex justify-start items-center">
          <button className="bg-white text-[black] text-sm font-bold tracking-widest py-3 px-9 ml-5 hover:bg-[var(--dark)] hover:text-white">
            SHOP MEN
          </button>
          <button className="bg-white text-[black] text-sm font-bold tracking-widest py-3 px-9 ml-5 hover:bg-[var(--dark)] hover:text-white">
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
};

const Favorites = () => {
  const [tabI, setTabI] = useState<Number>(0);
  const tabs = ["FOR ACTIVITY", "FOR EVERYDAY", "FOR TRAVEL"];

  return (
    <div className="py-10 px-16">
      <div className="w-full flex justify-center items-center py-5">
        <h1 className="text-4xl font-bold tracking-widest">Our Favorites</h1>
      </div>

      <div className="flex justify-center items-center">
        {tabs?.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => setTabI(i)}
              className={`py-4 ${
                tabI === i
                  ? "text-[black] border-[black] border-b-2"
                  : "text-[grey] border-[grey] border-b-2"
              } font-semibold tracking-widest px-16`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between items-center py-10">
        {images?.map((item, i) => {
          return (
            <>
              {tabI === item.i && (
                <div
                  key={i}
                  className="border-2"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
                  }}
                >
                  <div className="relative group">
                    <img src={item.image} alt="" className="h-80" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-3">
                      <button className="bg-white text-[black] text-sm font-bold tracking-widest py-3 px-12 ml-5 hover:bg-[var(--dark)] hover:text-white hidden group-hover:block">
                        SHOP MEN
                      </button>
                      <button className="bg-white text-[black] text-sm font-bold tracking-widest py-3 px-9 ml-5 hover:bg-[var(--dark)] hover:text-white hidden group-hover:block">
                        SHOP WOMEN
                      </button>
                    </div>
                  </div>
                  <div className="my-4 mx-2">
                    <h3 className="text-xl font-bold tracking-widest">
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

const OnSale = () => {
  return (
    <div className="px-20 py-8">
      <div className="pb-7">
        <h5 className="text-4xl font-bold">Now On Sale</h5>
      </div>
      <div className="flex justify-between items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const images = [
  {
    i: 0,
    title: "Tree Runner",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/7fB3HCfwKOfGxBJSc1Pz9u/799f9baedecebedf4cefd0b5de785d68/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-TreeRunner.jpg.jpg",
  },
  {
    i: 0,
    title: "Tree Breezer Point",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/6ujXyR4Zn7a7dRYHmRfjgf/aaf19e18a42f3832d613e0432becc353/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-Breezers.jpg",
  },
  {
    i: 0,
    title: "Tree Lounger",
    image:
      "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/435KjmlR8qHwzlw8LNW6I3/1c792a6b0920deb2f0eac18f6fd4c123/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-Lounger.jpg",
  },
  {
    i: 1,
    title: "Tree Dasher 2",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/PNCqDeWUQhktX4gTKxV8g/e7c0b623779b4de17127bcee1659db15/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-Active.jpg",
  },
  {
    i: 1,
    title: "Tree Flyer",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/7bt0bKbNPv4Vitux51YZsE/2bc1d6334ede00d1139595447b65b86d/SP23_Lookbook_Category_Carousel_Cards_Performance_Tree_Flyer-min.jpg",
  },
  {
    i: 1,
    title: "Trail Runner SWT",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/6M8Mn8VHOzJq6JTeNITJKQ/a8427f1639ab06908c56245dcc0fbc0c/SP23_Lookbook_Category_Carousel_Cards_Performance_Trail_Runner-min.jpg",
  },
  {
    i: 2,
    title: "Tree Skipper",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/3fA6NgWASCqwQOTRcDhjIF/b9c6d2ec012df353ebc9052562aceef6/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-Skipper.jpg",
  },
  {
    i: 2,
    title: "Allgood Cotton Tee",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/13cA3Q1mRuZA39Hfm9PLwD/e077ba1e363a2ff36472939be2b131b3/CottonTee-Women-Bliizard-02.jpg",
  },
  {
    i: 2,
    title: "Tree Piper",
    image:
      "//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000,b_rgb:f5f5f5/cms/CsS5xpGEd6VSM3nkSnIKU/d8ed29193b6fb5d78c703de642a2e9f1/23Q2-SummerLookbook-Category-Carousel-Tile-1110x1110-TreePipers.jpg",
  },
];
