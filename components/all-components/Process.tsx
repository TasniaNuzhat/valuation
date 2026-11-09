"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
interface ProcessProps { className?: string; }
const stages = [
  { title:"Assess your valuation", description:"Understand the approaches, assumptions, and questions behind a valuation.", heading:"Review your valuation", label:"VALUATION WORKSHOP", items:["Valuation methods and assumptions","Revenue and growth projections","Comparable company benchmarks","Questions behind the proposed figure"], bars:[46,63,54,79,66,90,73] },
  { title:"Model your equity", description:"Explore how ownership can change across fundraising scenarios.", heading:"Understand ownership changes", label:"EQUITY WORKSHOP", items:["Current ownership and cap table","New investor share allocation","Founder dilution scenarios","Future fundraising implications"], bars:[73,54,62,43,68,57,46] },
  { title:"Review deal terms", description:"Identify clauses that influence control, outcomes, and future flexibility.", heading:"Deal review checklist", label:"TERM SHEET WORKSHOP", items:["Liquidation preferences","Voting and governance rights","Protective provisions","Questions for your advisor"], bars:[52,74,61,84,68,57,78] },
];
export default function Process({ className }: ProcessProps) {
 const [active,setActive]=useState(0);
 const selected=stages[active];
 return <section className={cn("dark section",className)} id="process"><div className="wrap">
  <div className="section-top reveal"><div><span className="ref-eyebrow">How it works</span><h2>Understand the numbers.<br/><span style={{color:"#B1EC6F"}}>Review the terms.</span></h2></div><p className="lead">Work through valuation assumptions, ownership scenarios, and term sheet provisions in a clear, practical sequence.</p></div>
  <div className="steps"><div className="step-list" role="group" aria-label="Workshop topics">
  {stages.map((stage,i)=><button type="button" key={stage.title} className={cn("step",active===i&&"active")} onClick={()=>setActive(i)} aria-pressed={active===i}><div><h3>{stage.title}</h3><p>{stage.description}</p></div></button>)}
  </div><div className="process-ui process-dynamic" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.22}} className="process-content">
   <div className="float-title">{selected.label}</div><h3>{selected.heading}</h3>
   <div className="process-bars" aria-hidden="true">{selected.bars.map((v,i)=><span key={i} style={{height:`${v}%`}} />)}</div>
   <div className="process-items">{selected.items.map(item=><div className="lineitem" key={item}><span className="tick">✓</span><span>{item}</span></div>)}</div>
  </motion.div></AnimatePresence></div></div>
 </div></section>;
}
