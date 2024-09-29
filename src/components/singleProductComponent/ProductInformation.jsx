import { useEffect } from "react";
import sofa1 from "/public/img/info.png";
import sofa2 from "/public/img/info2.png";

const ProductInformation = () => {
  return (
    <>
      <div className="text-center space-x-12 mb-12 flex flex-col items-center gap-y-5 lg:gap-y-0 lg:block">
        <span className="font-medium text-3xl">Description</span>
        <span className="font-medium text-3xl text-gray-400">
          Additional Information
        </span>
        <span className="font-medium text-3xl text-gray-400">Reviews [5]</span>
      </div>
      <div className="flex flex-col justify-center gap-y-10 items-center text-justify px-10 lg:container lg:px-0">
        <span>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and <br />
          sound of Marshall, unplugs the chords, and takes the show on the road.
        </span>
        <span>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          <br />
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and
          <br />
          extended highs for a sound that is both articulate and pronounced. The
          analogue knobs allow you to fine tune the controls to your
          <br />
          personal preferences while the guitar-influenced leather strap enables
          easy and stylish travel.
        </span>
      </div>
      <div className="flex flex-col gap-y-5 px-5 items-center justify-evenly my-10 lg:flex-row lg:gap-y-0 lg:px-0">
        <img src={sofa1} alt="sofa" className="w-96" width={450} height={250} />
        <img src={sofa2} alt="sofa" className="w-96" width={450} height={250} />
      </div>
    </>
  );
};

export default ProductInformation;
