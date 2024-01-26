type Selection = {
  selectionImage: string;
  selectionCategory: string;
};

function Selection({ selectionImage, selectionCategory }: Selection) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-sm">
        <img src={selectionImage} className="w-11 h-11 rounded-full"></img>
        <p>{selectionCategory}</p>
      </div>
    </div>
  );
}

export default Selection;
