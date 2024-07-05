type Props = {
  queries: {
    cat1: string;
    cat2: string;
    cat3: string;
  };
};

export default function FilterBtn({ queries }: Props) {
  const condition =
    queries.cat1 === "" || queries.cat2 === "" || queries.cat3 === "";

  return (
    <button
      className="px-5 py-2 rounded-2xl bg-customPurpleDark text-customBrightWhite transition-all duration-300 disabled:opacity-60"
      disabled={condition}
    >
      გაფილტვრა
    </button>
  );
}
