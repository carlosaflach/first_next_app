import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {

  const router = useRouter();
  const { asPath } = router;

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="logo.svg" alt="Dev News!" />
        <nav>
          <Link href="/">
            <a className={asPath === '/' ? styles.active : ''}>Home</a>
          </Link>
          <Link href="/posts">
            <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}