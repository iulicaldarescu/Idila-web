type DiscoverProductType = {
  children: string;
};

function DiscoverProduct({ children }: DiscoverProductType) {
  return <button className="p-4 bg-green-400">{children}</button>;
}

export default DiscoverProduct;
