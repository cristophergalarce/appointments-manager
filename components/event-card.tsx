import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { Event } from '@/types';

type EventCardProps = Pick<Event, 'hostName' | 'eventName' | 'eventDuration' | 'eventPrice'> & {
  onClick?: () => void;
};

const EventCard: React.FC<EventCardProps> = ({ hostName, eventName, eventDuration, eventPrice, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer mb-4">
      <div className="mb-2">
        <p className="text-sm font-medium">{hostName}</p>
      </div>
      <Card className="p-4">
        <h3 className="text-lg font-semibold">{eventName}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Badge variant="secondary" icon={Clock}>{eventDuration}</Badge>
        </div>
        <p className="text-sm font-medium mt-2">{eventPrice}</p>
      </Card>
    </div>
  );
};

export default EventCard;