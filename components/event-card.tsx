import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface EventCardProps {
  userName: string;
  eventName: string;
  eventDuration: string;
  eventPrice: string;
}

const EventCard: React.FC<EventCardProps> = ({ userName, eventName, eventDuration, eventPrice }) => {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <p className="text-sm font-medium">{userName}</p>
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