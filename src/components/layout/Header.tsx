import Link from "next/link";
import Input from "../ui/Input";
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.logo}>Code<b>Licius</b></h1>
        </Link>
        <Input type="search" placeholder="Search..." name="search" key="search" />
      </header>
    </>
  );
}