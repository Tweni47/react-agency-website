import spendingImage from "../assets/spending.svg";

const Unlock = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:px-[100px] px-[50px] py-[80px]">
      <img src={spendingImage} alt="Spending Image" />

      <div className="p-10">
        <h2 className="text-4xl font-semibold text-gray-700 ">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-[#388E3B] hover:bg-[#237D31] rounded-[5px] px-5 py-2 mt-6 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Unlock;
