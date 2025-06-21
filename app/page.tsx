import { ServiceStatusCard } from "@/components/status-indicator";
import { getAllServicesStatus } from "@/lib/healthchecks";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function Home() {
  const { botStatus, miniAppStatus } = await getAllServicesStatus();

  const allOperational = botStatus.status === 'up' && miniAppStatus.status === 'up';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-10">
        <div className="container-lg">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo */}
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt="CoconutSplit Logo"
                width={80}
                height={80}
                className="rounded-xl shadow-lg border border-border"
                priority
              />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                CoconutSplit
              </h1>
              <div className="h-px w-16 bg-border mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="pb-16">
        <div className="container-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">Service Details</h3>
            <p className="text-muted-foreground">Real-time monitoring of our core services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ServiceStatusCard service={botStatus} />
            <ServiceStatusCard service={miniAppStatus} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="container-lg py-12">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Status updates every 60 seconds
              </p>
              <p className="text-xs text-muted-foreground/70">
                Last updated: {new Date().toLocaleString()}
              </p>
            </div>

            <div className="divider max-w-xs mx-auto"></div>

            <Link
              href="https://t.me/coconutsplit_bot"
              className="button-minimal inline-flex items-center space-x-2 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Launch CoconutSplit Bot</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
