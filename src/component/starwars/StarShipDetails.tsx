import { useHistory } from "react-router-dom";
import type { Results } from "./StarshipList";
import { Card,Button } from "react-bootstrap";
interface IProps {
  location: {
    state: Results;
  };
}

const Details = (props: IProps) => {
  const history = useHistory();
  const onBack = () => {
    history.goBack();
  };
  return (
    <>
    <div className="row justify-content-center">
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Title>{props.location.state.name}</Card.Title>
        <Card.Text>
          <p>Birth Year:{props.location.state.birth_year}</p>
          <p>Eye Color:{props.location.state.eye_color}</p>
          <p>Gender:{props.location.state.gender}</p>
          <p>Hair Color:{props.location.state.hair_color}</p>
          <p>Height:{props.location.state.height}</p>
          <p>Skin Color:{props.location.state.skin_color}</p>
          <p>Date Created:{props.location.state.created}</p>
        </Card.Text>
        <Button onClick={onBack} variant="primary">Go Back</Button>
      </Card.Body>
      </Card>
      </div>
      </>
  );
};

export default Details;
