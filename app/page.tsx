import {getUser} from "@/utils/cookie";

export default async function Home() {


  return (
    <button onClick={getUser}>
      all good go do what you gotta do
    </button>
  );
}
