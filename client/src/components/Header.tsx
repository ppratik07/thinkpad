import { Calendar, Clock, Home, Menu, Settings } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";

interface NavItem {
    name: string;
    path: string;
    icon: React.ReactNode;
}
const navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <Calendar className="h-5 w-5" /> },
    { name: 'History', path: '/history', icon: <Clock className="h-5 w-5" /> },
]

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    return (
        <header>
            <div className="container flex justify-between items-center">
                <NavLink to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">N</span>
                    </div>
                    <span className="font-display font-semibold text-xl">NoteGleam</span>
                </NavLink>
                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                location.pathname === item.path
                                    ? "text-primary bg-primary/10"
                                    : "text-foreground/80 hover:text-primary hover:bg-background"
                            )}
                        >
                            <span className="flex items-center gap-2">
                                {item.icon}
                                {item.name}
                            </span>
                        </NavLink>
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                    </Button>
                    <Button size="sm">New Meeting</Button>
                </div>
                <button
                    className="md:hidden p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-background/80"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={cn(
                    "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
                    mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={cn(
                        "absolute top-[72px] right-0 w-64 h-screen bg-card border-l border-border p-6 transition-transform duration-300 ease-out",
                        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                    onClick={e => e.stopPropagation()}
                >
                    <nav className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "px-4 py-3 rounded-md text-base font-medium transition-colors flex items-center",
                                    location.pathname === item.path
                                        ? "text-primary bg-primary/10"
                                        : "text-foreground/80 hover:text-primary hover:bg-background"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    {item.icon}
                                    {item.name}
                                </span>
                            </NavLink>
                        ))}
                        <div className="pt-4 flex flex-col space-y-3">
                            <Button variant="outline" className="gap-2 w-full justify-start">
                                <Settings className="h-4 w-4" />
                                <span>Settings</span>
                            </Button>
                            <Button className="w-full">New Meeting</Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}