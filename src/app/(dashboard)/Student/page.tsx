// src/app/(dashboard)/Student/page.tsx
"use client";
import Announcements from "@/src/components/Announcements";
import BigCalendar from "@/src/components/BigCalendar";
import EventCalendar from "@/src/components/EventCalendar";
// import StudentDashboard from "./StudentDashboard"; // Import the server component

const Student: React.FC = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (CS)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        {/* <Announcements /> */}
      </div>
    </div>
  );
};

export default Student;
