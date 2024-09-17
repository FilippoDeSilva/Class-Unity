"use client"

import {Calendar, momentLocalizer, View, Views} from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/src/lib/data';
import { useState } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    // const [view, setView] = useState<View>(Views.MONTH); // Switch to month view for testing

    const handleOnChangeView = (selectedView:View) =>{
      setView(selectedView);
    }
    // console.log(calendarEvents);
  return (
        <Calendar 
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week","day"]}
        view={view}
        style={{height:"98%"}}
        onView={handleOnChangeView}      
        min={new Date(2025,1,0,8,0,0)}  
        max={new Date(2025,1,0,15,0,0)}
        />
    
  )
}

export default BigCalendar