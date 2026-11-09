"use client";
import React from "react";
import { cn } from "@/lib/utils";
interface NavbarProps { className?: string; }
export default function Navbar({ className }: NavbarProps) {
  const html = "<header class=\"wrap nav\"><a aria-label=\"Back to top\" class=\"brand\" href=\"#home\"><span class=\"mark\"></span></a><nav class=\"links\" id=\"navlinks\"><a href=\"#about\">About</a><a href=\"#curriculum\">Curriculum</a><a href=\"#process\">How it works</a><a href=\"#outcomes\">Outcomes</a><a href=\"#faq\">FAQ</a></nav><div class=\"nav-right\"><a class=\"btn\" href=\"#application\">Apply now</a><button aria-label=\"Toggle menu\" class=\"mobile-toggle\" id=\"menu\">☰</button></div></header>";
  return <div className={cn("section-host", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
