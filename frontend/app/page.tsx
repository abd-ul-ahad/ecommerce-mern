export default function Home() {
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
}
