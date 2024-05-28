import * as React from "react";

interface EventInfoProps {
  userName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventDuration: string;
}

const EventInfo: React.FC<EventInfoProps> = ({
  userName,
  eventName,
  eventDate,
  eventTime,
  eventLocation,
  eventDuration,
}) => {
  return (
    <div className="max-w-[325px] space-y-4 p-4">
      <div className="text-lg text-gray-500">{userName}</div>
      <div className="text-xl font-medium">{eventName}</div>
      <div className="text-sm text-gray-500">
        <p>
          Cuándo: {eventDate} {eventTime}
        </p>
        <p>
          Dónde: {eventLocation}
        </p>
        <p>
          Duración: {eventDuration}
        </p>
      </div>
    </div>
    
  );
};

export default EventInfo;