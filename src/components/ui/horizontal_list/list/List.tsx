import Item from "./item/Item";

type Props = {
  list: Array<IQuizzCard>;
};

export default function List({ list }: Props) {
  return (
    <div className="w-full grid grid-flow-col auto-cols-max gap-5 overflow-x-scroll scroll-hidden p-3">
      {list.map((quizz) => (
        <Item key={quizz.id} data={quizz} />
      ))}
    </div>
  );
}
