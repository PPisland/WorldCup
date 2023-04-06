const AnimalCard = ({ animal, choice, onClickChoice }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="border-8 border-white shoadow-lg shadow-white w-96 "
        src={`${process.env.PUBLIC_URL}/images/whatsthis/${animal}.jpeg`}
      />
      <div className="text-2xl mt-4 font-bold">{animal} 💕💕💕</div>
      <button
        className={`border-2 border-black text-2xl mt-4 px-4 py-2 rounded-md ${
          choice % 2 === 0 ? "bg-pink-400" : "bg-violet-400"
        }`}
        onClick={onClickChoice(animal)}
      >
        선택
      </button>
    </div>
  );
};

export default AnimalCard;
