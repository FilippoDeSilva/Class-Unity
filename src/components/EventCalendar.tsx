"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import Announcements from "./Announcements";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

//Temporary Data
const events=[
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const EventCalendar = () => {
    const [Value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'><Calendar onChange={onChange} value={Value} />
    {/* <Calendar onChange={onChange} value={Value}/> */}
    <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
    </div>
    <div className="flex flex-col gap-4">
        {events.map(events=>(
            <div key={events.id} className="p-5 rounded-md border-2 border-grey-100 border-t-4 odd:border-t-lamasky even:border-t-lamaskylight">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-grey-600">{events.title}</h1>
                    <span className="text-grey-300 text-xs">{events.time}</span>
                </div>
                <p className="mt-2 text-gray-400 text-xs">{events.description}</p>
            </div>
        ))}
    </div>
    <Announcements />
    </div>
  )
}

export default EventCalendar