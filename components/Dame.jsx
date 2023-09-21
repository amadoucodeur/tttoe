import PionO from "./PionO";
import PionX from "./PionX";
import Tab from "./Tab";
import styles from "./styles/dame.module.css";

export default function Dame({ sprit }) {

  return (
    <div className={styles.dame}>
      {sprit[0].map((el, ind) => {
        if (el == "o") {
          return <Tab pion={"o"} key={ind} />;
        } else if (el == "x") {
          return <Tab pion={"x"} key={ind} />;
        } else {
          return <Tab pion={""} key={ind} />;
        }
      })}
    </div>
  );
}
