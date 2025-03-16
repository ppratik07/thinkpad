import { Search } from "lucide-react"
import { Header } from "../components/Header"
import { Input } from "../components/ui/input"

export const History = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container px-4 max-w-5xl pt-24 pb-16 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <h1 className="text-3xl font-bold">Meeting History</h1>

                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search meetings..."
                            className="pl-9"                          
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}