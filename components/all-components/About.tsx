"use client";
import React from "react";
import { cn } from "@/lib/utils";
interface AboutProps { className?: string; }
export default function About({ className }: AboutProps) {
  const html = "<section class=\"wrap section\" id=\"about\"><div class=\"section-top reveal\"><div><span class=\"ref-eyebrow\">About the bootcamp</span><h2>Understand Your Offer.<br/><span class=\"accent\">Protect Your Equity.</span></h2></div><p class=\"lead\">Understand valuation, dilution, and investor rights before making funding decisions.</p></div><div class=\"quote reveal\"><div class=\"quote-copy\"><h3 style=\"font-size:30px;font-weight:400;letter-spacing:-.045em;line-height:1.2;margin:24px 0\">A term sheet is more than a valuation.</h3><p>The ownership percentage, liquidation preference, governance rights, and future financing provisions all influence what a deal means for a founder.</p></div><div class=\"quote-image\"><div class=\"quote-diagram\"><div class=\"visual-head\"><b>Before you decide</b><span>Review</span></div><div class=\"lineitem\"><span class=\"tick\">✓</span>Understand the economics</div><div class=\"lineitem\"><span class=\"tick\">✓</span>Consider the trade-offs</div><div class=\"lineitem\"><span class=\"tick\">✓</span>Prepare questions</div></div></div></div></section>";
  return <div className={cn("section-host", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
