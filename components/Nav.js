import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
    const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
        <Link href="/">
            <button className="text-lg font-medium font-bold">Avans<span className="font-normal">Questions</span></button>
        </Link>
        <ul className="flex items-center gap-10">
          {!user && (
            <Link href={"/auth/login"}>
            <p className="py-2 px-4 text-sm bg-red-700 text-white rounded-lg font-medium ml-8">
              Log In
            </p>
          </Link>
          )}
          {user && (
            <div className="flex items-center gap-6">
              <Link href="/post">
                <p className="font-medium bg-red-700 text-white py-2 px-4 rounded-md text-sm">
                  Ask a Question!</p>
              </Link>
              <Link href="/dashboard">
                <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL} />
              </Link>
            </div>
          )}
          
        </ul>
    </nav>
  );
}

