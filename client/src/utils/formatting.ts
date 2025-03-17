// Format date for display
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  }
  
  // Format duration for display
  export function formatDuration(minutes?: number): string {
    if (!minutes) return '';
    
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins > 0 ? `${mins}m` : ''}`;
    }
    return `${mins}m`;
  }
  
  // Get platform icon name
  export function getPlatformIcon(platform: string): string {
    switch (platform) {
      case 'zoom':
        return 'video';
      case 'google-meet':
        return 'video';
      case 'ms-teams':
        return 'users';
      default:
        return 'video';
    }
  }
  