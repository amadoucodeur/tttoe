"use client"
import Dame from "@/components/Dame";
import styles from "./game.module.css"
import { useState } from "react";

export default function page() {
  const sprit = useState(["","x","o","","x","","o","",""])
  return (
    <div className={styles.game}>
      <Dame sprit={sprit} />
    </div>
  );
}
