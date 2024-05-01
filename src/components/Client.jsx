import clientLogo1 from "../assets/client_logos/clientLogo1.svg";
import clientLogo2 from "../assets/client_logos/clientLogo2.svg";
import clientLogo3 from "../assets/client_logos/clientLogo3.svg";
import clientLogo4 from "../assets/client_logos/clientLogo4.svg";
import clientLogo5 from "../assets/client_logos/clientLogo5.svg";
import clientLogo6 from "../assets/client_logos/clientLogo6.svg";
import clientLogo7 from "../assets/client_logos/clientLogo7.svg";

const Client = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:px-[100px] px-[50px] py-[80px]">
      <h2 className="text-4xl font-semibold text-gray-700 ">Our Clients</h2>
      <p className="text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex w-full justify-between space-x-5 flex-wrap">
        <img src={clientLogo1} alt="clientLogo1" />
        <img src={clientLogo2} alt="clientLogo2" />
        <img src={clientLogo3} alt="clientLogo3" />
        <img src={clientLogo4} alt="clientLogo4" />
        <img src={clientLogo5} alt="clientLogo5" />
        <img src={clientLogo6} alt="clientLogo6" />
        <img src={clientLogo7} alt="clientLogo7" />
      </div>
    </div>
  );
};

export default Client;
