import UserCard from "@/src/components/UserCard";
import CountChart from "@/src/components/CountChart";
import EventCalendar from "@/src/components/EventCalendar";
import Announcements from "@/src/components/Announcements";

const AdminPage = () => {
  return (
    <div className="min-h-screen w-full p-8 flex gap-4 flex-col md:flex-row bg-[#F7F8FA]">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="instructor" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 pt-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/2 h-[350px]">
            <CountChart />
          </div>

          {/* BOTTOM CHART */}
          <div className=""></div>
        </div>
      </div>
    
      {/* RIGHT */}
      {/* <div className="w-full lg:w-1/3 flex justify-end lg:justify-start lg:items-start"> */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start lg:items-start">
        <EventCalendar />
        {/* <Announcements /> */}
      </div>
    </div>
  );
};

export default AdminPage;
