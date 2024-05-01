import updateImage1 from "../assets/updates_images/updateImage1.svg";
import updateImage2 from "../assets/updates_images/updateImage2.svg";
import updateImage3 from "../assets/updates_images/updateImage3.svg";
import arrowRight from "../assets/arrowRight.svg";

const Updates = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:px-[100px] px-[50px] py-[80px]">
      <h2 className="text-4xl text-center font-semibold text-gray-700 ">
        Caring is the new marketing
      </h2>
      <p className="text-center lg:px-[250px]">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who&apos;s joining the community, read
        about how our community are increasing their membership income and
        lot&apos;s more.
      </p>
      <div className="flex flex-col lg:flex-row md:flex-wrap lg:space-y-0 space-y-24 items-center w-full justify-between ">
        <div className="p-4 rounded md:max-w-[368px] relative">
          <img
            src={updateImage1}
            width="368px"
            height="286px"
            alt="community Icon 1"
          />
          <div className="flex flex-col space-y-4 p-2 md:max-w-[280px] max-w-[240px] bg-[#F5F7FA] rounded items-center absolute md:top-[210px] md:right-11 top-[170px] right-[36px] shadow-lg ">
            <p className="text-center text-gray-700">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>

            <div className="flex items-center ">
              <button className="text-[#388E3B]">Read More</button>
              <img src={arrowRight} className="ml-2" alt="Right Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="p-4 rounded md:max-w-[368px] relative">
          <img
            src={updateImage2}
            width="368px"
            height="286px"
            alt="community Icon 1"
          />
          <div className="flex flex-col space-y-4 p-2 md:max-w-[280px] max-w-[240px] bg-[#F5F7FA] rounded items-center absolute md:top-[210px] md:right-11 top-[170px] right-[36px] shadow-lg ">
            <p className="text-center text-gray-700">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>

            <div className="flex items-center ">
              <button className="text-[#388E3B]">Read More</button>
              <img src={arrowRight} className="ml-2" alt="Right Arrow Icon" />
            </div>
          </div>
        </div>
        <div className="p-4 rounded md:max-w-[368px] relative">
          <img
            src={updateImage3}
            width="368px"
            height="286px"
            alt="community Icon 1"
          />
          <div className="flex flex-col space-y-4 p-3 md:max-w-[280px] max-w-[240px] bg-[#F5F7FA] rounded items-center absolute md:top-[220px] md:right-11 top-[170px] right-[36px] shadow-lg">
            <p className="text-center text-gray-700">
              Revamping the Membership Model with Triathlon Australia
            </p>

            <div className="flex items-center ">
              <button className="text-[#388E3B]">Read More</button>
              <img src={arrowRight} className="ml-2" alt="Right Arrow Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
