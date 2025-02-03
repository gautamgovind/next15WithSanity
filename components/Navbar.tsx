import { auth, signIn, signOut } from "@/auth"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut } from "lucide-react";


const Navbar = async() => {
  const session = await auth();
console.log("sess in navbar ", session)
  return (
    <header className="px-4 py-0.5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/gautam-logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/idea/create">
                <span>Create</span>
              </Link>
              <form action={async ()=>{
                  "use server"
                  await signOut()
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                      style={{maxHeight: "40px"}}
                    />
                    <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ): (
            <>
              <form action={async ()=>{
                "use server"
                await signIn("github");
              }}>
                <button type="submit">Sign In</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar