import styles from '../styles/About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container_todo_about}>
        <h1>Sobre o projeto</h1>
        <p>NextemonDB é uma aplicação desenvolvida em Next.js que permite consultar informações sobre Pokémons. Descubra os detalhes dos seus Pokémons favoritos, como altura, peso, tipos e muito mais. Explore o mundo fascinante dos Pokémons com o NextemonDB!</p>
        <div className={styles.about_img}>
          <Image
            src="/images/pikachu_cozinheiro.jpeg"
            alt="Charizard"
            width={380}
            height={380}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
