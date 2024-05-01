import illustration from "../assets/Illustration.svg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center space-y-8 flex-col md:flex-row md:px-[100px] px-[50px] py-[80px] bg-[#F5F7FA]">
      <div className="pt-4">
        <h1 className="md:text-[60px] text-[50px] font-semibold text-gray-700 ">
          Lessons and insights{" "}
        </h1>
        <h1 className="text-[60px] font-bold text-[#388E3B]">from 8 years</h1>
        <p className="mt-2">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-[#388E3B] hover:bg-[#237D31] rounded-[5px] px-5 py-2 mt-6 text-white">
          Register
        </button>
      </div>
      <div>
        <img src={illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Hero;
