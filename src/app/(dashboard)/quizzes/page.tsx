// import Filter from "../../../components/quizzes_page/filter/Filter";
import Heading from "../../../components/quizzes_page/Heading";
import List from "../../../components/quizzes_page/list/List";
// import { dummydata } from "../../../lib/DummyData";

export async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/all-quizzes");
    const result = await res.json();

    if (!res.ok) {
      return null;
    }

    return result as Array<IQuizzCard>;
  } catch (error) {
    console.error(error);
    return null;
  }
}

type Props = {
  searchParams: {
    filter: string;
  };
};

export default async function QuizzesPage({ searchParams }: Props) {
  const data = await getData();

  return (
    <>
      <Heading query={searchParams.filter} />
      {/* <Filter /> */}
      <List data={data} />
    </>
  );
}
