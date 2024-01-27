import {
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black flex flex-col px-4 pt-5 pb-14 gap-9 z-50 text-white">
      {/* container 1 phone-program*/}
      <div>
        <p className="text-white text-2xl font-bold">0745974456</p>
        <p className="text-gray-400 text-sm">Luni-Vineri 8-18, Sambata 10-18</p>
      </div>

      {/* container 2 info-contact*/}
      <div className="flex gap-2">
        <p className="border-r-[1px] pr-2 underline cursor-pointer">
          info@idila.ro
        </p>
        <p className="underline cursor-pointer">Date de contact</p>
      </div>

      {/* container 3 icons-container*/}
      <div className="flex gap-5">
        <FaFacebookF style={{ color: "gray", height: "27px", width: "27px" }} />
        <FaTwitter style={{ color: "gray", height: "27px", width: "27px" }} />
        <FaInstagram style={{ color: "gray", height: "27px", width: "27px" }} />
        <FaYoutube style={{ color: "gray", height: "27px", width: "27px" }} />
      </div>

      {/* container 4 rights-developer*/}
      <div className="flex items-center gap-2 text-sm">
        <FaRegCopyright />
        <p>2024 Idila, s.r.o (SRL)</p>
      </div>
    </footer>
  );
}

export default Footer;
