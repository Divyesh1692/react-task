import axios from "axios";

const Response = async () => {
  let data = await axios.get(
    "https://admin.artpallatte.com/api/website-data/v?frompreview=true"
  );
  //   console.log(data.data.data);

  return data.data.data;
};
export default Response;
