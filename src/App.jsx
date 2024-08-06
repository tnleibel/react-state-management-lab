import { useState } from 'react'

import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ])

      const handleAddFighter = (newFighter) => {
        if(money >= newFighter.price) {
          const updatedTeam = [...team, newFighter]
          const updatedMoney = money - newFighter.price
          const updatedStrength = totalStrength + newFighter.strength
          const updatedAgility = totalAgility + newFighter.agility
          setTeam(updatedTeam)
          setMoney(updatedMoney)
          setTotalStrength(updatedStrength)
          setTotalAgility(updatedAgility)
          console.log(updatedTeam)
        } else {
          console.log('Not enough money')
        }
      }

      const handleRemoveFighter = (removedFighter) => {
        const updatedTeam = [...team.filter(member => member !== removedFighter)]
        const updatedMoney = money + removedFighter.price
        const updatedStrength = totalStrength - removedFighter.strength
        const updatedAgility = totalAgility - removedFighter.agility
        setTeam(updatedTeam)
        setMoney(updatedMoney)
        setTotalStrength(updatedStrength)
        setTotalAgility(updatedAgility)
      }

  return (
    <>
        <h1></h1>
        <h2>You have {money} Gold.</h2>
        {totalStrength === 0 ? (
        <h2>Team Strength: 0</h2>
        ) : (
          <h2>Team Strength: {totalStrength}</h2>
        )}
        {totalAgility === 0 ? (
        <h2>Team Agility: 0</h2>
        ) : (
          <h2>Team Agility: {totalAgility}</h2>
        )}
        {team.length === 0 ? (
          <h2>Pick some team members!</h2>
        ) : (
          <>
            <h2>Your team:</h2>
            <ul>
              {team.map((fighter, index) => (
                  <div key={index} className="fighter">
                    <li>
                      <img src={fighter.img}></img>
                    </li>
                    <li>
                      Name: {fighter.name}
                    </li>
                    <li>
                      Price: {fighter.price}
                    </li>
                    <li>
                      Strength: {fighter.strength}
                    </li>
                    <li>
                      Agility: {fighter.agility}
                    </li>
                    <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
                  </div>
              ))}
            </ul>
          </>
        )}

        <h2>Fighters:</h2>
        <ul>
          {zombieFighters.map((fighter, index) => (
              <div key={index} className="fighter">
                <li>
                  <img src={fighter.img}></img>
                </li>
                <li>
                  Name: {fighter.name}
                </li>
                <li>
                  Price: {fighter.price}
                </li>
                <li>
                  Strength: {fighter.strength}
                </li>
                <li>
                  Agility: {fighter.agility}
                </li>
                <button onClick={() => handleAddFighter(fighter)}>Add</button>
              </div>
          ))}
        </ul>
    </>
  );
}

export default App