import * as React from "react";
import { Event } from "@/types";

type EventInfoProps = Omit<Event, 'id' | 'eventPrice' | 'eventDescription'> & {
  scheduledDate?: string;
  scheduledTime?: string;
};

const EventInfo: React.FC<EventInfoProps> = ({
  hostName,
  eventName,
  scheduledDate,
  scheduledTime,
  eventLocation,
  eventDuration,
}) => {
  return (
    <div className="max-w-[325px] space-y-4 p-4 border rounded-lg shadow-sm">
      <div className="text-lg text-gray-500">{hostName}</div>
      <div className="text-xl font-medium">{eventName}</div>
      <div className="space-y-2 text-sm text-gray-500">
        {scheduledDate && scheduledTime && (
          <div>
            <p className="font-semibold">Cuándo</p>
            <div>{new Date(scheduledDate).toLocaleDateString()}</div>
            <div>{scheduledTime}</div>
          </div>
        )}
        <div>
          <p className="font-semibold">Dónde</p>
          <div>{eventLocation}</div>
        </div>
        <div>
          <p className="font-semibold">Duración</p>
          <div>{eventDuration}</div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;