import membersIcon from "../assets/achievement_icons/membersIcon.svg";
import clubsIcon from "../assets/achievement_icons/clubsIcon.svg";
import eventBookingsIcon from "../assets/achievement_icons/eventBookingsIcon.svg";
import paymentsIcon from "../assets/achievement_icons/paymentsIcon.svg";

const Achievements = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center md:px-[100px] px-[50px] py-[80px] bg-[#F5F7FA]">
      <div className="">
        <h2 className="text-4xl font-semibold text-gray-700 ">
          Helping a local
          <br />
          <span className="text-4xl font-bold text-[#8cc58e]">
            business reinvent itself
          </span>
        </h2>
        <p className="mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex flex-col md:flex-row ">
          <div className="flex p-4 ">
            <img src={membersIcon} alt="Members Icon" />
            <div className="flex flex-col ml-4">
              <h2 className="text-4xl font-semibold text-gray-700 ">
                2,245,341
              </h2>
              <p>Members</p>
            </div>
          </div>
          <div className="flex p-4">
            <img src={clubsIcon} alt="Clubs Icon" />
            <div className="flex flex-col ml-4">
              <h2 className="text-4xl font-semibold text-gray-700 ">46,328</h2>
              <p>Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex p-4">
            <img src={eventBookingsIcon} alt="Event Bookings Icon" />
            <div className="flex flex-col ml-4">
              <h2 className="text-4xl font-semibold text-gray-700 ">828,867</h2>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="flex p-4">
            <img src={paymentsIcon} alt="Payments Icon" />
            <div className="flex flex-col ml-4">
              <h2 className="text-4xl font-semibold text-gray-700 ">
                1,926,436
              </h2>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
