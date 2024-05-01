import customerLogo1 from "../assets/customer-logos/customerLogo1.svg";
import customerLogo2 from "../assets/customer-logos/customerLogo2.svg";
import customerLogo3 from "../assets/customer-logos/customerLogo3.svg";
import customerLogo4 from "../assets/customer-logos/customerLogo4.svg";
import customerLogo5 from "../assets/customer-logos/customerLogo5.svg";
import customerLogo6 from "../assets/customer-logos/customerLogo6.svg";

import customerImage from "../assets/customerImage.svg";
import arrowRight from "../assets/arrowRight.svg";

const Customer = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:px-[100px] px-[50px] py-[80px] bg-[#F5F7FA]">
      <img src={customerImage} alt="Customer Image" />

      <div className="p-10">
        <p>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h3 className="text-2xl font-semibold text-[#388E3B] mt-2">
          Tim Smith
        </h3>
        <p className="mt-2">British Dragon Boat Racing Association</p>
        <div className="flex w-full justify-between space-x-5 flex-wrap mt-4">
          <img src={customerLogo1} alt="clientLogo1" />
          <img src={customerLogo2} alt="clientLogo2" />
          <img src={customerLogo3} alt="clientLogo3" />
          <img src={customerLogo4} alt="clientLogo4" />
          <img src={customerLogo5} alt="clientLogo5" />
          <img src={customerLogo6} alt="clientLogo6" />
          <div className="flex items-center">
            <button className="text-[#388E3B]">Meet all customers</button>
            <img src={arrowRight} className="ml-2" alt="Right Arrow Icom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
