import Image from "next/image";
import banner1 from "../assets/banner/banner1.jpeg"; // Adjust the path accordingly
import image from "../assets/banner/image.png";
import starIcon from "../assets/icon/VectorStarIcon.svg";

export default function BannerPage() {
  return (
    <div className="bannerContainer">
      <div className="textSection">
        <h1 className="heading">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="subtext">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="ctaButton">Shop Now</button>
      </div>
      
       
      <div className="imageSection"  style={{marginTop:"134px"}} >
        <Image src={starIcon} alt={"StarIcon"}  className="starSmall"></Image>
       
         <Image src={banner1} alt="Banner Image"  className="backgroundImage" ></Image>
         <Image src={starIcon} alt={"StarIcon"} className="starNormal" ></Image>

         
          
        
        
      </div>
    
     
    </div>
  );
}
