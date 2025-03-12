import { Link } from "react-router";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <footer className="py-6 bg-black text-white px-7">

            <div className="flex justify-between items-center">

                <Link to="/" style={{ fontFamily: "Kaushan Script" }} className="flex items-center space-x-2 text-white">
                    <span className="text-2xl lg:text-5xl font-bold">Hiramatsukai</span>
                </Link>

                <div className="space-x-5">
                    <a href="https://www.instagram.com/hiramatsukai?igsh=amY5NGdpMTQ5eXVh" target="_blank">
                        <InstagramIcon
                            fontSize="large"
                            className="hover:cursor-pointer"
                        />
                    </a>
                    <a href="https://www.facebook.com/share/18DmkvAqxX/" target="_blank">
                        <FacebookIcon
                            fontSize="large"
                            className="hover:cursor-pointer"
                        />
                    </a>
                </div>

            </div>

            <div className="flex items-center justify-center my-5 lg:my-0">
                <p className="text-center text-xs lg:text-sm leading-loose">
                    © {new Date().getFullYear()} Hiramatsukai. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
