import Image from "next/image";
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=favorite,home,search,settings" rel="stylesheet" />
import BannerPage from "./component/Banner";
import HomePageBrands from "./component/Brands";
import NewArrivals from "./component/NewArrivals";
export default function Home() {
  return (
    
    <div className="container">
    <BannerPage/>
    <HomePageBrands/>
   <NewArrivals/>
    </div>
  );
}
