import calenderImage from "../assets/calender.svg";

const Calender = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:px-[100px] px-[50px] py-[80px]">
      <img src={calenderImage} alt="Calender Image" />

      <div className="p-10">
        <h2 className="text-4xl font-semibold text-gray-700 ">
          How to design your site footer like we did
        </h2>
        <p className="mt-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="bg-[#388E3B] hover:bg-[#237D31] rounded-[5px] px-5 py-2 mt-6 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Calender;
