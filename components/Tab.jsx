import PionO from "./PionO";
import PionX from "./PionX";
import styles from "./styles/tab.module.css";

export default function Tab({ pion }) {
  return (
    <div className={styles.tab}>
      {pion === "o" && <PionO />}
      {pion === "x" && <PionX />}
    </div>
  );
}
