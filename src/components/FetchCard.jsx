export const FetchCard = ({ fetchCharacter }) => {
  return (
    <div>
      {fetchCharacter.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};
