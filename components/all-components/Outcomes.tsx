"use client";
import React from "react";
import { cn } from "@/lib/utils";
interface OutcomesProps { className?: string; }
export default function Outcomes({ className }: OutcomesProps) {
  const html = "<section class=\"wrap section\" id=\"outcomes\"><div class=\"section-top reveal\"><div><span class=\"ref-eyebrow\">Learning outcomes</span><h2>Make sense of the offer.<br/><span class=\"accent\">Protect your ownership.</span></h2></div><p class=\"lead\">Leave with a clearer framework for evaluating valuation assumptions, equity dilution, and the implications of key deal terms.</p></div><div class=\"statgrid\"><div class=\"stat reveal\"><span>VALUATION</span><strong>Know why.</strong><span>Understand what drives the number.</span></div><div class=\"stat reveal\"><span>OWNERSHIP</span><strong>See the impact.</strong><span>Think through dilution before you agree.</span></div><div class=\"stat reveal\"><span>DEAL TERMS</span><strong>Ask better.</strong><span>Recognize clauses worth discussing.</span></div></div></section>";
  return <div className={cn("section-host", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
