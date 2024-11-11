import Link from "next/link";
import LogoIcon from '/public/logo.svg'; 

export default function index() {
  return (
    <div className="flex justify-between items-center pl-4 pr-4 lg:pl-24 lg:pr-24 pt-6
    bg-darkPurple">
      <LogoIcon
        aria-hidden
        src="/logo.svg"
        alt="Logo icon"
        width={120}
        height={28}
        className="fill-white"
        
      />
      <Link href="/#" className="border-b-2 border-eucaplyptus">   Apply for Access</Link>


    </div>
  )
}
