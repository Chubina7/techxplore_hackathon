type Props = {
  query: string;
};

export default function Heading({ query }: Props) {
  const filterResult = (() => {
    switch (query) {
      case "popular":
        return "პოპულარული ქვიზები";
      case "suggestions":
        return "შემოთავაზებული ქვიზები";
      default:
        return "ყველა ქვიზი";
    }
  })();

  return (
    <h1 className="text-3xl select-none font-semibold">👉 {filterResult}</h1>
  );
}
