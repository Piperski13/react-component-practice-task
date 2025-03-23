import "../App.js";
import ConceptHeader from "./ConceptHeader.js";
const ConceptCard = (props) => {
  return (
    <div>
      <ConceptHeader keyConceptsImage={props.keyConceptsImage}></ConceptHeader>
      <ul id="concepts">
        <li className="concept">
          <img src={props.concepts[0].image} alt={props.concepts[0].title} />
          <h2>{props.concepts[0].title}</h2>
          <p>{props.concepts[0].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default ConceptCard;
