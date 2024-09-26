import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import watch from "../../assets/icons/watch.svg";

const ContactMain = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <span className="text-3xl font-bold mb-2">Get In Touch With Us</span>
        <p className="text-gray-400 text-sm text-center px-12 lg:px-0">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col items-center justify-evenly mt-20 mb-20 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <img src={location} alt="" />
              <span className="font-medium text-xl px-4">Address</span>
            </div>
            <p className="font-medium text-sm">
              236 5th SE Avenue, New <br /> York NY10000, United <br /> States
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <img src={phone} alt="" />
              <span className="font-medium text-xl px-4">Phone</span>
            </div>
            <p className="font-medium text-sm">
              Mobile: +(84) 546-6789
              <br /> Hotline: +(84) 456-6789
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center">
              <img src={watch} alt="" />
              <span className="font-medium text-xl px-4">Working Time</span>
            </div>
            <p className="font-medium text-sm">
              Monday-Friday: 9:00 <br /> - 22:00 <br />
              Saturday-Sunday: 9:00 <br /> - 21:00
            </p>
          </div>
        </div>
        <form action="" className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-medium text-sm">
              Your name
            </label>
            <input
              type="text"
              className="border border-gray-400 px-5 py-3 w-96 rounded-lg"
              placeholder="Abc"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-medium text-sm">
              Email address
            </label>
            <input
              type="text"
              className="border border-gray-400 px-5 py-3 w-96 rounded-lg"
              placeholder="Abc@def.com"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-medium text-sm">
              Subject
            </label>
            <input
              type="text"
              className="border border-gray-400 px-5 py-3 w-96 rounded-lg"
              placeholder="This is an optional"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label htmlFor="" className="font-medium text-sm">
              Message
            </label>
            <textarea
              name=""
              id=""
              className="border border-gray-400 px-5 py-3 w-96 rounded-lg"
              placeholder="Hi! i’d like to ask about"
            ></textarea>
          </div>

          <div>
            <button className="bg-primary px-20 py-2 text-white rounded-md">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactMain;
