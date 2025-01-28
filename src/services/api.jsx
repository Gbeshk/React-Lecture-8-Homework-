import axios from "axios";
export async function FetchData(setData) {
  try {
    const quotes = await axios.get("https://dummyjson.com/quotes");
    setData(quotes.data.quotes);
    console.log(quotes.data.quotes);
  } catch (error) {
    console.log(error);
  }
}
