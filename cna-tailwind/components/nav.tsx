import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/" as="">Home</Link>
        </li>
        <li>
          <Link href="/foo" as="foo">Foo</Link>
        </li>
        <li>
          <Link href="/bar"><a>Bar</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
