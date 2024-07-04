import { IoSearch } from "react-icons/io5";

export default function QuizzesSearch() {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <IoSearch size={20} className="absolute top-1/2 left-5 transform -translate-y-1/2" />
        <input
          className="w-full rounded-2xl px-5 py-3 pl-16 focus:outline-none"
          type="search"
          placeholder="Search"
        />
      </div>
    </section>
  );
}
