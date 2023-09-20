import Dame from "@/components/Dame";
import styles from "./game.module.css"

export default function page() {
  return (
    <div className={styles.game}>
      <Dame />
    </div>
  );
}
