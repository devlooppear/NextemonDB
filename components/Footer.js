import styles from '../styles/Footer.module.css'

export default function Footer() {
  const getCurrentYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer className={styles.footer}>
      <p>
        <span>NextemonDB</span> &copy; {getCurrentYear()}
      </p>
    </footer>
  )
}
