'use client'
import Image from "next/image";
import styles from "./styles/header.module.css";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={"#"}>
        <Image
          src={"/tttoe-logo.png"}
          width={100}
          height={100}
          alt="le logo de tttoe"
        />
        <h1>TTTOE</h1>
      </Link>
      <TbMenu onClick={()=>{console.log("os")}}/>
    </header>
  );
}
