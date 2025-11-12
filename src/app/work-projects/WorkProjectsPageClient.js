"use client";

import { useSearchParams } from "next/navigation";
import WorkProjects from "./WorkProjects";
import BaseLayout from "../components/BaseLayout";

export default function WorkProjectsPageClient() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");

  return (
    <BaseLayout>
      <WorkProjects initialProject={project} />
    </BaseLayout>
  );
}
