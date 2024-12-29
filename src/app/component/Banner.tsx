import Image from "next/image";
import banner1 from "../assets/banner/banner1.jpeg"; // Adjust the path accordingly
import image from "../assets/banner/image.png";

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
      <div className="imageSection">
        <Image
          src={banner1}
          alt="Banner Background"
          className="backgroundImage"
        />
        {/* <Image src={} alt="Model" className="foregroundImage" /> */}
      </div>
    </div>
  );
}
