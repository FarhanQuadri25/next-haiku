import Dashboard from "../components/Dashboard";
import RegisterForm from "../components/RegisterForm";
import { getUserCookie } from "../lib/getUser";

export default async function HomPage() {
  const user = await getUserCookie();
  return (
    <>
      {user && <Dashboard user={user} />}
      {!user && (
        <>
          <p className="text-center text-2xl text-gray-600 mb-5">
            Don&rsquo;t hav an account?<strong>Have an Account first</strong>
          </p>
          <RegisterForm />
        </>
      )}
    </>
  );
}
