export function getDurationString(startTime: number): string {
    const endTime = Date.now();
    const durationMs = endTime - startTime;

    // Convert duration to milliseconds, seconds, and minutes
    const durationMsStr = `${durationMs}ms`;
    const durationSec = Math.round(durationMs / 1000);
    const durationSecStr = `${durationSec}s`;
    const durationMin = Math.round(durationSec / 60);
    const durationMinStr = `${durationMin}m`;

    let durationStr: string;
    if (durationMs < 1000) {
        durationStr = durationMsStr;
    } else if (durationSec < 60) {
        durationStr = durationSecStr;
    } else {
        durationStr = durationMinStr;
    }

    return durationStr;
}
