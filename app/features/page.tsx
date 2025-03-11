import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const features = [
    {
        title: "Easy Group Management",
        description: "Create and manage expense-sharing groups with your friends, family, or roommates. Add members, track who's in the group, and maintain separate expenses for different occasions.",
        category: "Core Features",
        highlights: ["Create multiple groups", "Manage group members", "Keep expenses organized"],
        image: "/features/groups.png"
    },
    {
        title: "Smart Expense Tracking",
        description: "Add expenses quickly and let CoconutSplit handle the math. Simply input the amount, select who paid, and who needs to share the cost.",
        category: "Core Features",
        highlights: ["Split bills instantly", "Track shared expenses", "Monitor group spending"],
        image: "/features/expenses.png"
    },
    {
        title: "Automated Receipt Processing",
        description: "Skip manual input by uploading receipt photos. Our advanced NLP technology automatically extracts and processes expense details.",
        category: "Smart Features",
        highlights: ["Photo receipt scanning", "Automatic expense extraction", "Time-saving automation"],
        image: "/features/receipts.png"
    },
    {
        title: "Debt Management",
        description: "Keep track of who owes what with our intelligent debt tracking system. See clear summaries of all debts and mark them as settled when paid.",
        category: "Financial Tools",
        highlights: ["Track group debts", "View payment history", "Settle debts easily"],
        image: "/features/debts.png"
    },
    {
        title: "Settlement Tracking",
        description: "Monitor all financial settlements within your group. Keep a clear record of who has paid what and when.",
        category: "Financial Tools",
        highlights: ["Payment tracking", "Settlement history", "Financial transparency"],
        image: "/features/settlements.png"
    }
].map((feature, i) => ({
    ...feature,
    imageLeft: i % 2 === 0
}))

export default function Features() {
    return (
        <main className="container py-24 px-4 max-w-dvw">
            <div className="flex flex-col items-center gap-8 text-center">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                    Split Bills <span className="gradient-text-green">Without The Hassle</span>
                </h1>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    Everything you need to manage shared expenses with friends, powered by simple Telegram commands.
                </p>

                <div className="flex gap-4">
                    <Button size="lg" asChild>
                        <Link href="https://t.me/coconutsplit_bot">Try it Now</Link>
                    </Button>
                </div>

                <div className="flex flex-col gap-16 w-full max-w-6xl">
                    {features.map((feature) => (
                        <Card key={feature.title} className="overflow-hidden border-none shadow-none">
                            <div className={`flex flex-col gap-8 md:flex-row ${!feature.imageLeft ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-lg">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col justify-center text-left p-6">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <p className="text-muted-foreground mb-6">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {feature.highlights.map((highlight, i) => (
                                                <li key={i} className="text-sm flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="w-4 h-4 text-green-500 shrink-0"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
