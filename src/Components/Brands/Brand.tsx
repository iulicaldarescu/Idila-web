type Brands = {
  brandLogo: string;
  brandName: string;
};

function Brand({ brandLogo, brandName }: Brands) {
  return (
    <div className="text-center h-32   flex items-center justify-center">
      <img
        src={brandLogo}
        className="w-3/4 h-3/4 m-auto border border-red-700 bg-gray-100"
        alt={brandName}
      />
    </div>
  );
}

export default Brand;
