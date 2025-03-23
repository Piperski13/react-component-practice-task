import "../App.js";
import ConceptHeader from "./ConceptHeader.js";
import ConceptBody from "./ConceptBody.js";

const ConceptCard = (props) => {
  return (
    <div>
      <ConceptHeader keyConceptsImage={props.keyConceptsImage}></ConceptHeader>
      <ul id="concepts">
        <ConceptBody concepts={props.concepts[0]}></ConceptBody>
        <ConceptBody concepts={props.concepts[1]}></ConceptBody>
        <ConceptBody concepts={props.concepts[2]}></ConceptBody>
      </ul>
    </div>
  );
};

export default ConceptCard;
