import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`${styles.navbar} ${showMenu ? styles.navbar_active : ''}`}>
      {!showMenu && (
        <div className={styles.logo}>
          <Link href="/" passHref>
            <h1>
              Nextemon<span>DB</span>
            </h1>
          </Link>
        </div>
      )}
      <div
        className={`${styles.menu_icon} ${showMenu ? styles.menu_icon_grid : ''}`}
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
        </svg>
      </div>
      {showMenu && (
        <div className={styles.dropdown_menu_container}>
          <ul className={styles.link_items_selecao}>
            <li>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <ul className={styles.link_items}>
        <li>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
