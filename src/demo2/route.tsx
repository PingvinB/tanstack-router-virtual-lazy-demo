import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo2")({
  loader: async () => {
    await new Promise((r) => setTimeout(r, 100));
  },
});
