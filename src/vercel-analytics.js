import { inject } from "@vercel/analytics";

// Initialize Vercel Analytics
export function onRouteDidUpdate() {
  // Initialize Vercel Analytics only in production
  if (process.env.NODE_ENV === "production") {
    inject();
  }
}
