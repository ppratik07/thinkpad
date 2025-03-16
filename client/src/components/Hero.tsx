
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mic, FileText, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8 reveal-content">
        <div className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-2">
          <Sparkles className="h-4 w-4 mr-2" />
          <span>AI-Powered Meeting Assistant</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Capture, transcribe, and summarize
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 px-2">every meeting</span>
          effortlessly
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Focus on the conversation, not on taking notes. NoteGleam integrates with your favorite meeting platforms to record, transcribe, and summarize your meetings with AI precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => navigate('/dashboard')}
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => navigate('/meeting/new')}
          >
            <Mic className="h-4 w-4" />
            <span>Start New Meeting</span>
          </Button>
        </div>
      </div>
      
      <div className="w-full max-w-5xl mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 reveal-content">
        <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Record Meetings</h3>
          <p className="text-muted-foreground">
            Seamlessly record audio from Zoom, Teams, Google Meet, and more without complex setups.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Accurate Transcription</h3>
          <p className="text-muted-foreground">
            Convert conversations into searchable, editable text with powerful speaker recognition.
          </p>
        </div>
        
        <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI Summaries</h3>
          <p className="text-muted-foreground">
            Get concise, actionable summaries highlighting key points and action items automatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;