import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

export const CTASection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-primary">
            <div className="container px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to transform your meetings?</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                    Join thousands of teams using NoteGleam to capture, transcribe, and summarize their most important conversations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="gap-2"
                        onClick={() => navigate('/dashboard')}
                    >
                        <span>Get Started for Free</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 bg-transparent text-white border-white hover:bg-white/10"
                        onClick={() => window.open('#', '_blank')}
                    >
                        <span>Read Documentation</span>
                        <ExternalLink className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}