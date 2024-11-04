import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className="flex justify-between items-center pl-24 pr-24 pt-6 bg-darkPurple">
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Logo icon"
        width={90}
        height={32}
      />
      <Link href="/#" className="border-b-2 border-eucaplyptus">   Apply for Access</Link>

    
    </div>
  )
}
