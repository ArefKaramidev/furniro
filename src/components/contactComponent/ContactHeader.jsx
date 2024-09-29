import contactHeader from "/public/img/headershop.png";

const ContactHeader = () => {
  return (
    <>
      <header className="mb-8">
        <div className="relative flex items-center justify-center">
          <img
            src={contactHeader}
            alt=""
            className="w-full"
            width={800}
            height={300}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="font-bold text-3xl lg:text-5xl">Contact</span>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="font-medium">Home </span>
              <span className="font-medium text-xl"> {" > "} </span>
              <span className="font-normal"> Contact</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ContactHeader;
