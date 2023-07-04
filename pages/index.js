import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const pokemons = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Nextemon<span>DB</span>
        </h1>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
