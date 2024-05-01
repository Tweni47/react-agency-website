import communityIcon1 from "../assets/community_icons/communityIcon1.svg";
import communityIcon2 from "../assets/community_icons/communityIcon1.svg";
import communityIcon3 from "../assets/community_icons/communityIcon1.svg";

const Community = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:px-[100px] px-[50px] py-[80px]">
      <h2 className="text-4xl text-center font-semibold text-gray-700 ">
        Manage your entire community <br /> in a single system
      </h2>
      <p className="text-center">Who is Nextcent suitable for?</p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:space-y-0 space-y-4 items-center w-full justify-between ">
        <div className="flex flex-col space-y-2 items-center text-center shadow-sm p-4 rounded md:max-w-[300px]">
          <img
            width="65px"
            height="65px"
            src={communityIcon1}
            alt="community Icon 1"
          />
          <h3 className="text-3xl font-semibold text-gray-700">
            Membership Organisations
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center text-center  shadow-sm p-4 rounded md:max-w-[300px]">
          <img
            width="65px"
            height="65px"
            src={communityIcon2}
            alt="community Icon 1"
          />
          <h3 className="text-3xl font-semibold text-gray-700 items-center text-center">
            National Associations
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center text-center shadow-sm p-4 rounded md:max-w-[300px]">
          <img
            width="65px"
            height="65px"
            src={communityIcon3}
            alt="community Icon 1"
          />
          <h3 className="text-3xl font-semibold text-gray-700">
            Clubs And Groups
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
