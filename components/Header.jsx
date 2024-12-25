import Link from "next/link";
import { getUserCookie } from "../lib/getUser";
import { logout } from "../actions/userController";

export default async function Header() {
  const user = await getUserCookie();
  return (
    <header className=" shadow-xl">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-2xl">
              Our-Hai
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {user && (
                <>
                  <li>
                    <Link
                      href="/create-haiku"
                      className="btn btn-outline btn-accent mr-3"
                    >
                      Create Haiku
                    </Link>
                  </li>
                  <li>
                    <form action={logout} className="btn btn-outline btn-error">
                      <button>Log Out</button>
                    </form>
                  </li>
                </>
              )}
              {!user && (
                <li>
                  <Link href="/login" className="btn btn-primary">
                    Log In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
