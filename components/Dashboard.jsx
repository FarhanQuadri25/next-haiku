import { getCollection } from "../lib/db";
import { ObjectId } from "mongodb";
import Haiku from "./Haiku";

async function getHaikus(id) {
  const collection = await getCollection("haikus");
  const results = await collection
    .find({ author: ObjectId.createFromHexString(id) })
    .sort({ _id: -1 })
    .toArray();
  return results;
}

export default async function Dashboard({ user }) {
  const haikus = await getHaikus(user.userId);
  return (
    <div>
      <h2 className="text-center text-2xl text-gray-600 mb-5">You Haikus</h2>
      {haikus.map((haiku) => {
        haiku._id = haiku._id.toString();
        haiku.author = haiku.author.toString();
        return <Haiku key={haiku._id.toString()} haiku={haiku} />;
      })}
    </div>
  );
}
