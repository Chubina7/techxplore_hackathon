import QuizzesList from "./list/List";
import Name from "./Name";

type Props = {
  title: string;
  seeAllLink: string;
  data: Array<IQuizzCard>;
};

export default function HorizontalList({ data, title, seeAllLink }: Props) {
  return (
    <section className="w-full overflow-visible flex flex-col gap-2 select-none">
      <Name seeAllLink={seeAllLink} titleName={title} />
      <QuizzesList list={data} />
    </section>
  );
}
