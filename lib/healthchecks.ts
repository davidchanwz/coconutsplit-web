// Interface for Healthcheck API response
export interface HealthcheckStatus {
    name: string;
    slug: string;
    tags: string[];
    desc: string;
    grace: number;
    n_pings: number;
    status: 'up' | 'down' | 'grace' | 'paused';
    last_ping: string | null;
    next_ping: string | null;
    manual_resume: boolean;
    methods: string[];
    started: boolean;
    ping_url: string;
}

// Interface for our simplified status data
export interface ServiceStatus {
    name: string;
    status: 'up' | 'down' | 'grace' | 'paused' | 'unknown';
    lastPing: Date | null;
    nextPing: Date | null;
    description: string;
}

// Get status of a specific check by UUID
export async function getCheckStatus(uuid: string): Promise<ServiceStatus> {
    if (!uuid || !process.env.HEALTHCHECKS_API_KEY) {
        return {
            name: 'Unknown Service',
            status: 'unknown',
            lastPing: null,
            nextPing: null,
            description: 'Service configuration not found'
        };
    }

    try {
        const response = await fetch(`https://healthchecks.io/api/v1/checks/${uuid}`, {
            headers: {
                'X-Api-Key': process.env.HEALTHCHECKS_API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch status: ${response.statusText}`);
        }

        const data: HealthcheckStatus = await response.json();

        return {
            name: data.name,
            status: data.status,
            lastPing: data.last_ping ? new Date(data.last_ping) : null,
            nextPing: data.next_ping ? new Date(data.next_ping) : null,
            description: data.desc
        };
    } catch (error) {
        console.error('Error fetching check status:', error);
        return {
            name: 'Error',
            status: 'unknown',
            lastPing: null,
            nextPing: null,
            description: 'Failed to fetch service status'
        };
    }
}

// Get status for both bot and mini app
export async function getAllServicesStatus(): Promise<{
    botStatus: ServiceStatus;
    miniAppStatus: ServiceStatus;
}> {
    const botUuid = process.env.HEALTHCHECKS_BOT_CHECK_UUID || '';
    const miniAppUuid = process.env.HEALTHCHECKS_MINIAPP_CHECK_UUID || '';

    const [botStatus, miniAppStatus] = await Promise.all([
        getCheckStatus(botUuid),
        getCheckStatus(miniAppUuid)
    ]);

    return {
        botStatus: {
            ...botStatus,
            name: botStatus.name || 'Telegram Bot'
        },
        miniAppStatus: {
            ...miniAppStatus,
            name: miniAppStatus.name || 'Mini App'
        }
    };
}
