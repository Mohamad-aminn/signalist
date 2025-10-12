import {getUser} from "@/utils/cookies";

export default async function Home() {


  return (
    <button onClick={getUser}>
      all good go do what you gotta do
    </button>
  );
}
