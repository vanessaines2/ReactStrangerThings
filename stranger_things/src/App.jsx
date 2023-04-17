import { useEffect, useState } from "react";
import { fetchAllPost } from "../API/api";

function App() {
  const [data, setData] = useState([]);

  async function getPost() {
    const postList = await fetchAllPost();
    setData(postList.data.posts);
  }
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      {data.length > 0 &&
        data.map((data) => {
          return (
            <div key={data.author.username}>
              <h1>{data.price}</h1>
              <h2>{data.author.username}</h2>
            </div>
          );
        })}
    </div>
  );
}
export default App;
