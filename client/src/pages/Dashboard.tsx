import { ArrowRight, Calendar, FileText, Mic, Plus } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container px-4 max-w-6xl pt-24 pb-16 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 reveal-content">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Your Meetings</h1>
                        <p className="text-muted-foreground">Manage and access all your meeting recordings</p>
                    </div>

                    <Button
                        className="gap-2"
                    >
                        <Plus className="h-4 w-4" />
                        <span>New Meeting</span>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 reveal-content">
                    <div className="glass-card p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Mic className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Record Meeting</h3>
                        <p className="text-muted-foreground mb-4">
                            Start recording a new meeting from any platform in just a few clicks.
                        </p>
                        <Button
                            className="w-full gap-2"
                        >
                            <span>Start Recording</span>
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="glass-card p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Schedule Recording</h3>
                        <p className="text-muted-foreground mb-4">
                            Plan ahead by scheduling recordings for your upcoming meetings.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full gap-2"
                        >
                            <span>Schedule</span>
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="glass-card p-6 rounded-xl">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">View History</h3>
                        <p className="text-muted-foreground mb-4">
                            Browse through your past meeting transcripts and summaries.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() => navigate('/history')}
                        >
                            <span>View History</span>
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </main>

        </div>
    );
}