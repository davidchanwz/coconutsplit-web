import { TeamCard } from "@/components/team-card"

export default function AboutPage() {
    return (
        <section className="container py-10 md:py-24 px-10 max-w-dvw">
            <div className="border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            About CoconutSplit
                        </h2>
                        <p className="text-md text-justify sm:text-xl text-muted-foreground mt-4 mb-4">
                            CoconutSplit is a Telegram bot designed to simplify expense sharing among friends and groups.
                            Built with user experience in mind, it helps you manage shared expenses, track debts, and settle
                            payments effortlessly. Whether you&apos;re splitting rent, organizing group dinners, or managing
                            travel expenses, CoconutSplit makes the process smooth and hassle-free.
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            The Team
                        </h2>

                        <div className="flex flex-col items-center lg:items-stretch lg:flex-row justify-center gap-24 mt-16">
                            <TeamCard
                                name="David Chan"
                                role="Backend Developer"
                                image="/david.jpg"
                                github="https://github.com/davidchanwz"
                                linkedin="https://www.linkedin.com/in/davidchanwz/"
                                description="I love coconut."
                            />
                            <TeamCard
                                name="Aayush Sharma"
                                role="README Writer"
                                image="/aayush.jpg"
                                github="https://github.com/ahhyush"
                                linkedin="https://www.linkedin.com/in/aayush-sharma-329321208/"
                                description="I really love coconut."
                            />
                            <TeamCard
                                name="Jensen Huang"
                                role="DevOps Engineer"
                                image="/jensen.jpg"
                                github="https://github.com/jensenhuangyankai"
                                linkedin="https://www.linkedin.com/in/jensenhyk/"
                                description="I really really love coconut."
                            />
                            <TeamCard
                                name="Benjamin Koh"
                                role="Backend Developer"
                                image="/ben.jpg"
                                github="https://github.com/Ben926"
                                linkedin="https://www.linkedin.com/in/benjaminkoh926/"
                                description="I really really really love coconut."
                            />
                            {/* Add more team members as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
