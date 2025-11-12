import { Suspense } from "react";
import WorkProjectsPageClient from "./WorkProjectsPageClient";

export default function WorkProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkProjectsPageClient />
    </Suspense>
  );
}
