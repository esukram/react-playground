import Link from 'next/link'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li><Link href="/impressum" as="impressum">Impressum</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;