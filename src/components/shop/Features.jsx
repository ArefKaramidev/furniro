import champion from "../../assets/icons/champion.svg";
import nice from "../../assets/icons/nice.svg";
import operator from "../../assets/icons/operator.svg";
import post from "../../assets/icons/post.svg";

const Features = () => {
  return (
    <>
      <div className="bg-seconday flex flex-col items-start justify-between gap-20 py-20 px-16 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex items-center gap-2">
          <img src={champion} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">High Quality</span>
            <span className="font-normal text-gray-400">
              crafted from top materials
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={nice} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">Warranty Protection</span>
            <span className="font-normal text-gray-400">Over 2 years</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={post} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">Free Shipping</span>
            <span className="font-normal text-gray-400">Order over 150 $</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={operator} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">24 / 7 Support</span>
            <span className="font-normal text-gray-400">Dedicated support</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
