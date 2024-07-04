import Alls from "../../components/home_page/alls_section/Alls";
import Populars from "../../components/home_page/populars_section/Populars";
import QuizzesSearch from "../../components/home_page/search_section/QuizzesSearch";
import Suggestions from "../../components/home_page/suggestions_section/Suggestions";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl select-none font-semibold">🚀 აქ რამე ძერსკი ფრაზა!</h1>
      <QuizzesSearch />
      <div className="w-full flex gap-5">
        <div className="w-full flex flex-col gap-4">
          <Suggestions />
          <Populars />
          <Alls />
        </div>
        <div className="w-[40%] bg-customBrightWhite rounded-2xl"></div>
      </div>
    </>
  );
}
