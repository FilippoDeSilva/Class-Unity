import Announcements from "@/src/components/Announcements"
import BigCalendar from "@/src/components/BigCalendar"
// import "react-big-calendar/lib/css/react-big-calendar.css"
const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
      {/* CONTINUE FROM 1:25:00 */}
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Schedule (CS)</h1>
        <BigCalendar/>
      </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      {/* <EventCalendar/> */}
      <Announcements/>
      </div>
    </div>
  )
}

export default TeacherPage