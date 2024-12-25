import { getUserCookie } from "../../lib/getUser";
import { redirect } from "next/navigation";
import HaikuForm from "../../components/HaikuForm";

export default async function Page() {
  const user = await getUserCookie();
  if (!user) {
    return redirect("/");
  }

  return (
    <>
      <h2 className="text-center text-2xl text-gray-500 mb-5">Create Haiku</h2>
      <HaikuForm action='create' />
    </>
  );
}
