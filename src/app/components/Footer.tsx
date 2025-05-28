import { faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] flex flex-col justify-center items-center pb-[20px]">
        <h1 className="font-montserrat font-light text-[14px] text-center pt-4 text-black">2025 Exogestion, Todos los derechos reservados</h1>
        <Link href='/login' className="hover:text-[#00D084] transition"><FontAwesomeIcon icon={faLock} className="mr-2" />Dashboard</Link>
    </footer>
  )
}

export default Footer