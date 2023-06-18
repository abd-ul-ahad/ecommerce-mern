export default function ProductCard() {
  return (
    <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} className="mb-7">
      <div>
        <img
          className="md:h-96 h-72"
          src="//cdn.allbirds.com/image/upload/f_auto,q_auto,w_1110/cms/5cfAW4L1aY5mR3GquN7KNO/0ab1b1d9e64b7e4b00f680e27db102fc/AA001TM_SHOE_LEFT_GLOBAL_MENS_TREE_FLYER_NATURAL_BLACK_BLIZZARD.png"
          alt=""
        />
      </div>
      <div className="py-3 px-5">
        <h3 className="font-bold text-2xl">Women's Tree Flyer</h3>
        <p className="font-sm">Natural Black, Now: $89</p>
      </div>
    </div>
  );
}
