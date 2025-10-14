import Input from "../ui/Input";
import styles from './Header.module.css';

interface HeaderProps {
  
}

export default function Header({  }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Code<b>Lima</b></h1>
        <Input type="search" placeholder="Search..." name="search" key="search" />
      </header>
    </>
  );
}