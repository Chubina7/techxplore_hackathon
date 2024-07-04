import HorizontalList from "../../ui/horizontal_list/HorizontalList";
import { dummydata } from "../../../lib/DummyData";

export default function Suggestions() {
  // Retrieve data
  // ...
  // Pass tot the component
  return (
    <HorizontalList
      title="შემოთავაზებები"
      seeAllLink="/quizzes?filter=suggestions"
      data={dummydata}
    />
  );
}
