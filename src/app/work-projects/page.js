"use client";
import { useSearchParams } from "next/navigation";
import WorkProjects from "./WorkProjects";

export default function WorkProjectsPage() {
  const searchParams = useSearchParams();
  const project = searchParams.get("project");
  return <WorkProjects initialProject={project} />;
}
