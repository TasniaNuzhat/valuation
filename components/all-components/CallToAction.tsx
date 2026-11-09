"use client";
import React from "react";
import { cn } from "@/lib/utils";
interface CallToActionProps { className?: string; }
export default function CallToAction({ className }: CallToActionProps) {
  const html = "<section class=\"cta reveal\"><div><h2>Prepare to evaluate<br/><span class=\"accent\">your next investment offer.</span></h2><p>Prepare for a more informed funding conversation.</p></div><a class=\"btn\" href=\"#application\">Apply now</a></section>";
  return <div className={cn("section-host", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
