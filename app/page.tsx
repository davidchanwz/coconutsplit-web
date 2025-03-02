import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Split Bills with 🥥 CoconutSplit
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          The easiest way to split bills and expenses with friends on Telegram. Track shared expenses, settle debts, and keep your friendships intact.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="https://t.me/coconutsplit_bot">
              Start Splitting
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
