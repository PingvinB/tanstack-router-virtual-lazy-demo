import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo2/")({
  component: Demo2,
});

function Demo2() {
  return (
    <div>
      <h2>Demo2 Page</h2>
      <p>This is the demo2 page.</p>
    </div>
  );
}
