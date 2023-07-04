import styles from '../../styles/Pokemon.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results
    .filter((pokemon) => pokemon.url !== `${api}/0`) // Filtra o ID 0
    .map((pokemon, index) => ({
      params: { pokemonId: (index + 1).toString() },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  console.log(pokemon);

  const maxPokemons = 251;
  const previousId = parseInt(pokemon.id) - 1;
  const previousPage = previousId >= 1 ? `/pokemon/${previousId}` : '/pokemon/1';
  const nextPage = `/pokemon/${parseInt(pokemon.id) + 1}`;

  return (
    <div className={styles.container_todo_pokemon}>
      <div className={styles.container_nav_page}>
        {previousId > 0 && (
          <Link href={previousPage} passHref>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
              </svg>
            </span>
          </Link>
        )}
        <div className={styles.pokemon_container}>
          <h1 className={styles.title}>{pokemon.name}</h1>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
          />
          <div>
            <h3>Número:</h3>
            <p>#{pokemon.id}</p>
          </div>
          <div>
            <h3>Tipo:</h3>
            <div className={styles.types_container}>
              {pokemon.types.map((item, index) => (
                <span
                  key={index}
                  className={`${styles.type} ${styles['type_' + item.type.name]}`}
                >
                  {item.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.data_container}>
            <div className={styles.data_height}>
              <h4>Altura:</h4>
              <p>{pokemon.height * 10} cm</p>
            </div>
            <div className={styles.data_weight}>
              <h4>Peso:</h4>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
        <Link href={nextPage}>
          <a className={styles.next_link}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
              </svg>
          </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
