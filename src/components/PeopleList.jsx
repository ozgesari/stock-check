import React from "react";
const PeopleList=({people, getImageUrl})=> {

    const chemists = people.filter((person) => person.profession === 'chemist')
    const listItems = chemists.map((person) => 
  <li>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
  
        <p>
          <b>{person.name}: </b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    )
    return (
    <article>
        <h1>Scientists</h1>
    <ul>{listItems}</ul>
    </article>
)
  }

  export default PeopleList;