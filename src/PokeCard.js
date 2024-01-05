
import './PokeCard.css'

const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function PokeCard(prop){
   let imageSrc = `${imageUrl}${prop.id}.png`
    return(
        <div className="Pokecard">
        <div className="Pokecard-title">{ prop.name }</div>
        <img className="PokeImg" src={imageSrc} alt={prop.name}></img>
        <div className="Pokecard-data">Type: {prop.type}</div>
        <div className="Pokecard-data">EXP: {prop.exp}</div>
      </div>
    )
}

export default PokeCard;
