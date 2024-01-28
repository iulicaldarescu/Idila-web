import supabase from "../config/supabaseClient.js";

const getData = async () => {
  const { data, error } = await supabase.from("Product Category").select();

  return data;
};

export default getData;
