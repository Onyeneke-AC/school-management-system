"use client";

<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> ace3fc213010ca2bfaeb3e1886208f71e62aa844
import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

<<<<<<< HEAD
const events = [
  {
    id: 1,
    title: "Whatever wherever whoever I dey",
    time: "1:00pm - 12:00pm",
    description:
      "Whatever goes through the mind makes me wonder whether it goes through my mind too",
  },
  {
    id: 2,
    title: "Whatever wherever whoever I dey",
    time: "1:00pm - 12:00pm",
    description:
      "Whatever goes through the mind makes me wonder whether it goes through my mind too",
  },
  {
    id: 3,
    title: "Whatever wherever whoever I dey",
    time: "1:00pm - 12:00pm",
    description:
      "Whatever goes through the mind makes me wonder whether it goes through my mind too",
  },
];

=======
>>>>>>> ace3fc213010ca2bfaeb3e1886208f71e62aa844
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
<<<<<<< HEAD

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-gray-100 border-t-4 odd:border-t-primarySky even:border-t-primaryPurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
=======
>>>>>>> ace3fc213010ca2bfaeb3e1886208f71e62aa844
    </div>
  );
};

export default EventCalendar;
