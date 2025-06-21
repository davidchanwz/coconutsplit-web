import { ServiceStatus } from "@/lib/healthchecks";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function StatusIndicator({
    status,
    className
}: {
    status: ServiceStatus['status'];
    className?: string;
}) {
    const getStatusColor = () => {
        switch (status) {
            case 'up': return 'bg-green-500';
            case 'down': return 'bg-red-500';
            case 'grace': return 'bg-yellow-500';
            case 'paused': return 'bg-gray-500';
            default: return 'bg-gray-300';
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'up': return 'Operational';
            case 'down': return 'Down';
            case 'grace': return 'Late';
            case 'paused': return 'Paused';
            default: return 'Unknown';
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className={cn("w-3 h-3 rounded-full", getStatusColor(), className)} />
            <span>{getStatusText()}</span>
        </div>
    );
}

export function ServiceStatusCard({ service }: { service: ServiceStatus }) {
    function formatDate(date: Date | null) {
        if (!date) return 'N/A';
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(date);
    }

    const isOperational = service.status === 'up';

    return (
        <div className="bg-card border border-border rounded-lg p-6 group hover:shadow-lg hover:border-border/80 transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-card-foreground">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    <div className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-200",
                        isOperational ? "bg-green-500 shadow-green-500/30 shadow-sm" : "bg-red-500 shadow-red-500/30 shadow-sm"
                    )} />
                    <span className={cn(
                        "text-sm font-medium",
                        isOperational ? "text-green-400" : "text-red-400"
                    )}>
                        {isOperational ? 'Operational' : 'Down'}
                    </span>
                </div>
            </div>

            <div className="h-px bg-border my-4"></div>

            <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last Check</span>
                    <span className="font-mono text-xs text-card-foreground">{formatDate(service.lastPing)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Next Check</span>
                    <span className="font-mono text-xs text-card-foreground">{formatDate(service.nextPing)}</span>
                </div>
            </div>
        </div>
    );
}
