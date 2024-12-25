import HaikuForm from "../../../components/HaikuForm";
import { getCollection } from "../../../lib/db";
import { ObjectId } from "mongodb";
import { getUserCookie } from "../../../lib/getUser";
import { redirect } from "next/navigation";

async function getDoc(id) {
  const haikusCollection = await getCollection("haikus");
  const result = await haikusCollection.findOne({
    _id: ObjectId.createFromHexString(id),
  });

  if (result) {
    return {
      ...result,
      _id: result._id.toString(),
    };
  }

  return null;
}

export default async function Page(props) {
  const { id } = await props.params;
  const doc = await getDoc(id);
  const user = await getUserCookie();

  if (user.userId !== doc.author.toString()) {
    return redirect("/");
  }

  if (!doc) {
    return <div>Document not found</div>;
  }

  return (
    <div>
      <h2 className="text-center text-4xl text-gray-600 mt-7 mb-7">
        Edit Post
      </h2>
      <HaikuForm haiku={doc} action="edit" />
    </div>
  );
}
