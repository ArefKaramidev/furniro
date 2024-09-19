const ProductInformation = () => {
  return (
    <>
      <div className="text-center space-x-12 mb-12">
        <span className="font-medium text-3xl">Description</span>
        <span className="font-medium text-3xl text-gray-400">
          Additional Information
        </span>
        <span className="font-medium text-3xl text-gray-400">Reviews [5]</span>
      </div>
      <div className="flex flex-col justify-center gap-y-10 items-center text-justify container">
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
      <div className="flex items-center justify-evenly mt-10 container">
        <img src="/public/img/info.png" alt="" />
        <img src="/public/img/info2.png" alt="" />
      </div>
    </>
  );
};

export default ProductInformation;
