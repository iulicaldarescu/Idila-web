import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

function ProductCategory() {
  const { state: id } = useLocation();
  const [heartColor, setHearColor] = useState<string>("gray");

  const supaFetchFunc = async () => {
    try {
      const { data } = await supabase
        .from("Products")
        .select()
        .eq("category_id", id);

      return data;
    } catch (err) {
      console.error(err);
    } finally {
      // here whether is a success or error this code is executed regardless
      // could be a cleanup code
      console.log("FETCH COMPLETED");
    }
  };

  // data fetching
  const { data, isLoading } = useQuery({
    queryKey: [id],
    queryFn: supaFetchFunc,
  });

  useEffect(() => {
    console.log(data);
  }, [data, id]);

  if (isLoading) {
    return <p>LOADING ...</p>;
  }

  const schemaDeTest = () => {
    if (heartColor === "gray") {
      setHearColor("red");
    } else {
      setHearColor("gray");
    }
  };

  return (
    <div className="py-48 bg-gray-400 grid grid-cols-2 gap-4 px-4">
      {data?.map((product: any) => {
        return (
          <div className="bg-yellow-400 flex flex-col gap-2 items-center py-2">
            <div className="flex w-full justify-end pr-3">
              <FaHeart
                onClick={() => schemaDeTest()}
                className="active:scale-125"
                style={{ color: heartColor }}
              />
            </div>
            <img src="https://cdn.notinoimg.com/detail_main_mq/versace/8011003809240-o/versace-eros-deodorant-spray-pentru-barbati___15.jpg"></img>
            <p>{product.brand}</p>
            <p>{product.nume_produs}</p>
            <div>X X X X X</div>
            <p>{product.pret}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCategory;
