type Props = {
  handleModal: () => void;
  optionsList: Array<string>;
  id: string;
};

export default function Modal({ handleModal, optionsList, id }: Props) {
  return (
    <div
      className="absolute min-w-full -bottom-1 left-0 bg-customBrightWhite transform translate-y-[100%] overflow-hidden | rounded-2xl py-2"
      id={id}
    >
      {optionsList.map((opt, idx) => (
        <div
          key={idx}
          id={id}
          className="w-full px-3 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite cursor-pointer truncate"
          onClick={handleModal}
        >
          <h1 id={id}>{opt}</h1>
        </div>
      ))}
    </div>
  );
}
