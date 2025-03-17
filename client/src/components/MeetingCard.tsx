import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Video, ArrowRight } from 'lucide-react';
import { formatDate, formatDuration, getPlatformIcon } from '../utils/formatting';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { cn } from '../lib/utils';
import { Badge } from './ui/badge';
import { Meeting } from '../types/meetingg';


interface MeetingCardProps {
  meeting: Meeting;
  className?: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meeting, className }) => {
  const { id, title, date, platform, status, duration } = meeting;
  
  const platformIcons = {
    'zoom': <Video className="h-4 w-4 mr-1.5" />,
    'google-meet': <Video className="h-4 w-4 mr-1.5" />,
    'ms-teams': <Users className="h-4 w-4 mr-1.5" />,
    'other': <Video className="h-4 w-4 mr-1.5" />
  };
  
  const statusColors = {
    'scheduled': 'bg-blue-50 text-blue-500 border-blue-200',
    'in-progress': 'bg-green-50 text-green-500 border-green-200',
    'completed': 'bg-gray-50 text-gray-500 border-gray-200'
  };
  
  const platformNames = {
    'zoom': 'Zoom',
    'google-meet': 'Google Meet',
    'ms-teams': 'MS Teams',
    'other': 'Other'
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-elevated group",
      className
    )}>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={cn(
            "font-medium text-xs py-1 px-2",
            statusColors[status]
          )}>
            {status === 'scheduled' ? 'Upcoming' : 
             status === 'in-progress' ? 'Live' : 'Completed'}
          </Badge>
          
          <div className="flex items-center text-muted-foreground text-sm">
            {platformIcons[platform]}
            <span>{platformNames[platform]}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-3">
        <Link to={`/meeting/${id}`}>
          <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">
            {title}
          </h3>
        </Link>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(date)}</span>
          </div>
          
          {duration && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{formatDuration(duration)}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Link 
          to={`/meeting/${id}`}
          className="text-primary font-medium text-sm flex items-center transition-all hover:opacity-90"
        >
          {status === 'scheduled' ? 'Join Meeting' : 
           status === 'in-progress' ? 'View Live' : 'View Details'}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MeetingCard;
