
import React from 'react';
import { 
  VideoIcon, 
  FileText, 
  Sparkles, 
  Share2, 
  Clock, 
  Lock,
  CheckCircle2,
  Search,
  CalendarClock
} from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal-content">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for productivity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that transform how you capture and process meeting information
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<VideoIcon className="h-6 w-6 text-primary" />}
            title="Platform Integration"
            description="Works seamlessly with Zoom, Google Meet, Microsoft Teams, and other popular meeting platforms."
          />
          
          <FeatureCard 
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Real-time Transcription"
            description="Instantly convert speech to text with high accuracy across multiple languages and speakers."
          />
          
          <FeatureCard 
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            title="AI-Powered Summaries"
            description="Automatically generate concise meeting summaries, action items, and key decisions."
          />
          
          <FeatureCard 
            icon={<Share2 className="h-6 w-6 text-primary" />}
            title="Easy Sharing"
            description="Share transcripts and summaries with team members through various formats and integrations."
          />
          
          <FeatureCard 
            icon={<Search className="h-6 w-6 text-primary" />}
            title="Searchable Archives"
            description="Quickly find information from past meetings with powerful search capabilities."
          />
          
          <FeatureCard 
            icon={<CalendarClock className="h-6 w-6 text-primary" />}
            title="Meeting Scheduling"
            description="Schedule recordings in advance and never miss capturing an important meeting."
          />
          
          <FeatureCard 
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="Time-Stamped Notes"
            description="Add contextual notes that are synchronized with specific moments in the recording."
          />
          
          <FeatureCard 
            icon={<CheckCircle2 className="h-6 w-6 text-primary" />}
            title="Task Extraction"
            description="Automatically identify and extract action items and tasks from meeting discussions."
          />
          
          <FeatureCard 
            icon={<Lock className="h-6 w-6 text-primary" />}
            title="Secure Storage"
            description="Your meeting data is encrypted and stored securely with controlled access permissions."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-black/20 rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Features;