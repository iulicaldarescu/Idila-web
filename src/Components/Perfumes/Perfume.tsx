type perfumeDetails = {
  perfumePhoto: string;
  perfumeBrand: string;
  perfumeName: string;
};

function Perfume({ perfumePhoto, perfumeBrand, perfumeName }: perfumeDetails) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={perfumePhoto} className="w-2/3"></img>
        <p className="font-semibold">{perfumeBrand}</p>
        <p className="text-center">{perfumeName}</p>
      </div>
    </div>
  );
}

export default Perfume;
