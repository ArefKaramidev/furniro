import { memo, useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const Slider = memo(({ src, setFocus, setSlide }) => {
  const [imageLoaded, setimageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setimageLoaded(true);
    };
    img.src = src;
  }, [src]);
  const focusStyle = (img) => {
    setFocus(img);
  };

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="LQNc=]IAD$eS%%%1R4RjR4WBt7a#"
          width={80}
          height={80}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className="rounded-md"
        />
      )}
      {imageLoaded && (
        <img
          loading="lazy"
          src={src}
          alt="first product image"
          width={50}
          height={50}
          className="w-20 h-20 rounded-md cursor-pointer"
          onClick={() => {
            setSlide(src);
            focusStyle(src);
          }}
          style={{
            border: focus === src ? "solid 2px #B88E2F" : "none",
          }}
        />
      )}
    </>
  );
});

export default Slider;
