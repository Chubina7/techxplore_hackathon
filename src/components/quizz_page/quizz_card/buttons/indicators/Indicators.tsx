import Correct from "./Correct";
import QuestionsNumb from "./QuestionsNumb";
import Wrong from "./Wrong";

export default function Indicators() {
  return (
    <div className="flex gap-2 justify-center items-center opacity-60 select-none">
      <QuestionsNumb curr={1} from={10} />
      <Correct num={0} />
      <Wrong num={0} />
    </div>
  );
}
