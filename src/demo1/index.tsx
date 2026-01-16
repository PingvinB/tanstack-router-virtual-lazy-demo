import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo1")({
  component: Demo1,
});

function Demo1() {
  return (
    <div>
      <h2>Demo1 Page</h2>
      <p>This is the demo1 page.</p>
    </div>
  );
}
