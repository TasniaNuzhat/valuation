"use client";
import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps { className?: string; }

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("modern-footer", className)}>
      <div className="modern-footer-inner">
        <div className="modern-footer-top">
          <div className="modern-footer-brand">
            <a className="footer-symbol" href="#home" aria-label="Back to top">
              <span className="mark" />
            </a>
            <p>A practical bootcamp to make sense of valuation, equity, and term sheets before your next raise.</p>
          </div>
          <nav aria-label="Footer navigation" className="modern-footer-columns">
            <div>
              <h3>Explore</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#curriculum">Curriculum</a>
              <a href="#process">How It Works</a>
            </div>
            <div>
              <h3>More</h3>
              <a href="#outcomes">Outcomes</a>
              <a href="#faq">FAQs</a>
              <a href="#application">Apply Now</a>
            </div>
          </nav>
        </div>
        <div className="modern-footer-bottom">
          <p>© 2026 Valuation &amp; Term Sheet Bootcamp. All rights reserved.</p>
          <div className="modern-footer-social" aria-label="Social platforms">
            <span aria-label="LinkedIn" title="LinkedIn"><Linkedin size={18} strokeWidth={1.8}/></span>
            <span aria-label="Instagram" title="Instagram"><Instagram size={18} strokeWidth={1.8}/></span>
            <span aria-label="YouTube" title="YouTube"><Youtube size={18} strokeWidth={1.8}/></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
