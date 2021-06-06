import React from 'react'

const ActorGrid = (data) => {
  return (
    <div>
      {data.map(({ person }) => (
        <personCard
          key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country : null}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          summary={person.summary}
        />
      ))}
    </div>
  );
}

export default ActorGrid
