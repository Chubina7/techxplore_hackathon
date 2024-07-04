import Filter from "../../../components/quizzes_page/filter/Filter";
import Heading from "../../../components/quizzes_page/Heading";
import List from "../../../components/quizzes_page/list/List";

type Props = {
  searchParams: {
    filter: string;
  };
};

export default function QuizzesPage({ searchParams }: Props) {
  return (
    <>
      <Heading query={searchParams.filter} />
      <Filter />
      <List />
    </>
  );
}
