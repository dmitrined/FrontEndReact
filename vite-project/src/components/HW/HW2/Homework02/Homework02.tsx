import ProfileCard from '../ProfileCard/ProfileCard';
import { musk, trump, bezos } from '../profiles'; // Импорт данных профилей
import styles from './Homework02.module.css'; // Импорт стилей

export default function Homework02() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homework 02</h1>
      <div className={styles.profileList}>
        <ProfileCard profile={musk} />
        <ProfileCard profile={trump} />
        <ProfileCard profile={bezos} />
      </div>
    </div>
  );
}