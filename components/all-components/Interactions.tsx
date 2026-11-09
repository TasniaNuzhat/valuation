"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
interface InteractionsProps { className?: string; }
export default function Interactions({ className }: InteractionsProps) {
  useEffect(() => {
    const cleanup: Array<() => void> = [];
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
      }), { threshold: .08 });
      nodes.forEach(node => observer.observe(node));
      cleanup.push(() => observer.disconnect());
    } else nodes.forEach(node => node.classList.add("visible"));
    document.querySelectorAll<HTMLButtonElement>(".faq-q").forEach(button => {
      const onClick = () => {
        const item = button.closest(".faq-item");
        document.querySelectorAll(".faq-item").forEach(other => { if (other !== item) other.classList.remove("open"); });
        item?.classList.toggle("open");
        document.querySelectorAll<HTMLButtonElement>(".faq-q").forEach(q => q.setAttribute("aria-expanded", String(q.closest(".faq-item")?.classList.contains("open"))));
      };
      button.addEventListener("click", onClick);
      cleanup.push(() => button.removeEventListener("click", onClick));
    });
    document.querySelectorAll<HTMLElement>(".step").forEach(step => {
      const activate = () => {
        document.querySelectorAll(".step").forEach(other => other.classList.remove("active"));
        step.classList.add("active");
      };
      const onKey = (event: KeyboardEvent) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } };
      step.addEventListener("click", activate);
      step.addEventListener("keydown", onKey);
      cleanup.push(() => { step.removeEventListener("click", activate); step.removeEventListener("keydown", onKey); });
    });
    const menu = document.getElementById("menu");
    const navlinks = document.getElementById("navlinks");
    const toggle = () => navlinks?.classList.toggle("show");
    menu?.addEventListener("click", toggle);
    cleanup.push(() => menu?.removeEventListener("click", toggle));
    navlinks?.querySelectorAll("a").forEach(link => {
      const close = () => navlinks.classList.remove("show");
      link.addEventListener("click", close);
      cleanup.push(() => link.removeEventListener("click", close));
    });
    const form = document.getElementById("applyform") as HTMLFormElement | null;
    const onSubmit = (event: Event) => {
      event.preventDefault();
      const note = document.getElementById("formnote");
      if (note) note.textContent = "Application preview only. No information has been submitted.";
    };
    form?.addEventListener("submit", onSubmit);
    cleanup.push(() => form?.removeEventListener("submit", onSubmit));
    return () => cleanup.forEach(fn => fn());
  }, []);
  return <span className={cn("hidden", className)} aria-hidden="true" />;
}
