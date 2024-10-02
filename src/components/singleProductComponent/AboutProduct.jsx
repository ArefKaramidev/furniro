import facebook from "../../assets/icons/facebook.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

const AboutProduct = () => {
  return (
    <div className="flex gap-x-16 mt-10">
      <div className="flex flex-col gap-y-4">
        <span className="text-gray-400">SKU</span>
        <span className="text-gray-400">Category</span>
        <span className="text-gray-400">Tags</span>
        <span className="text-gray-400">Share</span>
      </div>

      <div className="flex flex-col gap-y-4">
        <span className="text-gray-400">:SS001</span>
        <span className="text-gray-400">:Sofas</span>
        <span className="text-gray-400">:Sofa, Chair, Home, Shop</span>
        <div className="flex items-center gap-x-2 mt-1">
          <img
            src={facebook}
            alt="facebook logo"
            className="w-5 h-5"
            width={10}
            height={10}
          />
          <img
            src={linkedIn}
            alt="linkedIn logo"
            className="w-5 h-5"
            width={10}
            height={10}
          />
          <img
            src={twitter}
            alt="twitter logo"
            className="w-5 h-5"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
