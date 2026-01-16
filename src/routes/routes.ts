// routes.ts
import { index, rootRoute, route } from "@tanstack/virtual-file-routes";

export const routes = rootRoute("root.tsx", [
  index("../home/index.tsx"),
  route("/demo1", "../demo1/index.tsx"),
  route("/demo2", "../demo2/route.tsx", [index("../demo2/index.tsx")]),
]);
