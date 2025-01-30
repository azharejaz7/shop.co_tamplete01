import CK_logo from "../assets/Brands/CK.svg";
import Gucci_logo from "../assets/Brands/gucci-logo-1 1.svg";
import Parada_logo from "../assets/Brands/prada-logo-1 1.svg";
import Versace_logo from "../assets/Brands/versace.svg";
import Zara_logo from "../assets/Brands/zara-logo-1 1.svg";
import Image from "next/image";

export default function HomePageBrands() {
  return (
    <div className="Brands">
      <Image src={Versace_logo} alt={"Versace_logo"} />
      <Image src={Zara_logo} alt={"Zara Logo"} />
      <Image src={Gucci_logo} alt={"Gucci_logo}"} />
      <Image src={Parada_logo} alt={"Parada Logo"} />
      <Image src={CK_logo} alt={"Calvin Klein Logo"} />
    </div>
  );
}
