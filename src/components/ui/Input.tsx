import styles from './Input.module.css';

interface InputProps {
  type: string;
  placeholder?: string;
  name?: string;
  key?: string;
}

export default function Input({ type, placeholder, name, key }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input type={type} placeholder={placeholder} name={name} id={key} />
    </div>
  );
}