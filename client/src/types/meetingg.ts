export type Platform = 'zoom' | 'google-meet' | 'ms-teams' | 'other';
export type MeetingStatus = 'scheduled' | 'in-progress' | 'completed';

export interface Meeting {
  id: string;
  title: string;
  date: string;
  platform: Platform;
  status: MeetingStatus;
  duration?: number; // in minutes
  transcription?: string;
  summary?: string;
  participants?: string[];
  meetingId?: string; // for platform-specific meeting IDs
}

// Zoom specific interfaces
export interface ZoomCredentials {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface ZoomTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface ZoomMeeting {
  id: string;
  topic: string;
  start_time: string;
  duration: number;
  join_url: string;
}

// Google Meet specific interfaces
export interface GoogleMeetCredentials {
  clientId: string;
  apiKey: string;
  clientSecret?: string;
}

export interface GoogleMeetEvent {
  id: string;
  summary: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
  hangoutLink?: string;
}
