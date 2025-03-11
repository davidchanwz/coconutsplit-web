import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="flex flex-col items-center justify-center p-24">
        <div className="container flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-text-green">Split Bills</span> with <span className="gradient-text-red">CoconutSplit</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The easiest way to split bills and expenses with friends on Telegram. Track shared expenses, settle debts, and keep your friendships intact.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" asChild>
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
      </section>

      <section className="w-full max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-16">
          <Card className="overflow-hidden border-none shadow-none">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-lg">
                <Image
                  src="/placeholder-features.png"
                  alt="Features"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl mb-4">Features</CardTitle>
                  <CardDescription className="text-base">
                    Discover all the powerful features that make expense splitting effortless. From receipt scanning to debt optimization, see what makes CoconutSplit special.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/features">Explore Features</Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-none shadow-none">
            <div className="flex flex-col gap-8 md:flex-row-reverse">
              <div className="flex-1 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-lg">
                <Image
                  src="/placeholder-docs.png"
                  alt="Documentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl mb-4">Documentation</CardTitle>
                  <CardDescription className="text-base">
                    Learn about all the commands and features available in CoconutSplit bot. Get detailed instructions on how to manage expenses and settle debts effectively.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/docs">View Documentation</Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-none shadow-none">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-lg">
                <Image
                  src="/placeholder-about.png"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl mb-4">About Us</CardTitle>
                  <CardDescription className="text-base">
                    Learn about our mission to simplify expense sharing and make financial relationships between friends smoother and stress-free.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-6">
                  <Button variant="outline" asChild>
                    <Link href="/about">About CoconutSplit</Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
