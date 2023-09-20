import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/game"}>Se connecter à un jeu</Link>
      <Link href={"#"}>Créer un jeu</Link>
    </main>
  );
}
