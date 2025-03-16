import { CTASection } from "../components/CTASection";
import Features from "../components/Features";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import { PricingCard } from "../components/PricingCard";
import { TestimonialCard } from "../components/TestimonialCard";

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Hero />
                <Features />
                <section className="py-20 bg-white dark:bg-black/20">
                    <div className="container px-4 max-w-6xl mx-auto">
                        <div className="text-center mb-16 reveal-content">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by teams everywhere</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                See how NoteGleam is transforming meeting productivity for teams of all sizes
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TestimonialCard
                                quote="NoteGleam has completely transformed our team meetings. The AI summaries save me hours of note-taking every week."
                                author="Alex Morgan"
                                role="Product Manager"
                                company="TechCorp"
                            />

                            <TestimonialCard
                                quote="The transcription accuracy is impressive, even with multiple speakers and technical terminology in our engineering discussions."
                                author="Sam Roberts"
                                role="Engineering Lead"
                                company="InnovateSoft"
                            />

                            <TestimonialCard
                                quote="As someone who manages client meetings all day, having reliable recordings and summaries has been a game-changer for my workflow."
                                author="Jamie Taylor"
                                role="Client Success Manager"
                                company="ConsultPro"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
                    <div className="container px-4 max-w-6xl mx-auto">
                        <div className="text-center mb-16 reveal-content">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Choose the plan that works best for you and your team
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <PricingCard
                                name="Free"
                                price="$0"
                                description="Perfect for getting started and exploring basic features"
                                features={[
                                    "5 meeting recordings per month",
                                    "Basic transcription",
                                    "Limited summary generation",
                                    "7-day storage"
                                ]}
                                buttonText="Get Started"
                                buttonVariant="outline"
                            />

                            <PricingCard
                                name="Pro"
                                price="$12"
                                period="per month"
                                description="Great for individuals who need more features and storage"
                                features={[
                                    "Unlimited meeting recordings",
                                    "Advanced transcription",
                                    "Enhanced summaries with action items",
                                    "30-day storage",
                                    "Priority support"
                                ]}
                                buttonText="Start Free Trial"
                                buttonVariant="default"
                                highlighted={true}
                            />

                            <PricingCard
                                name="Team"
                                price="$49"
                                period="per month"
                                description="Best for teams looking for collaboration features"
                                features={[
                                    "Everything in Pro",
                                    "Team sharing and permissions",
                                    "Collaborative annotations",
                                    "90-day storage",
                                    "Advanced integrations",
                                    "Dedicated support"
                                ]}
                                buttonText="Contact Sales"
                                buttonVariant="outline"
                            />
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}