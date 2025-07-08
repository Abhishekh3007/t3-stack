import "server-only";
import { PostHog } from "posthog-node";

// Validate env vars
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!POSTHOG_KEY || !POSTHOG_HOST) {
  throw new Error("Missing required PostHog environment variables");
}

// ✅ Correct and type-safe instantiation
const analyticsServerClient: PostHog = new PostHog(POSTHOG_KEY, {
  host: POSTHOG_HOST,
  flushAt: 1,
  flushInterval: 0,
});

export default analyticsServerClient;
