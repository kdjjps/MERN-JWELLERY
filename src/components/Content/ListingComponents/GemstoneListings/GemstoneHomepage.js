import React from "react";
import { BannerBox } from "../../common-style";
import { GemstoneHomepageBox } from "./style";
import { useRouteMatch } from "react-router-dom";

export default function GemstoneHomepage() {
  const { url, path } = useRouteMatch();

  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/gemstone-banner.png";

  return (
    <GemstoneHomepageBox>
      {path === "/gemstones/" ? (
        <BannerBox image={bannerImage}>
          <div>
            <h2 className="banner-small-heading" style={{ color: "#FFFFFF" }}>
              Natural and Lab <br /> Certified Gemstones
            </h2>
          </div>
        </BannerBox>
      ) : (
        <div></div>
      )}
      <section>
        <a href={`${url}/blue-sapphire`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/blue-sapphire.png"
            alt="blue-sapphire"
          />
          <p className="gem-english-name">Blue Sapphire</p>
          <p className="gem-hindi-name">(Neelam)</p>
        </a>

        <a href={`${url}/yellow-sapphire`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/yellow-sapphire.png"
            alt="yellow-sapphire"
          />
          <p className="gem-english-name">Yellow Sapphire</p>
          <p className="gem-hindi-name">(Pukhraj)</p>
        </a>

        <a href={`${url}/red-coral`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/red-coral.png"
            alt="red-coral"
          />
          <p className="gem-english-name">Red Coral</p>
          <p className="gem-hindi-name">(Moonga)</p>
        </a>

        <a href={`${url}/ruby`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/ruby.png"
            alt="ruby"
          />
          <p className="gem-english-name">Ruby</p>
          <p className="gem-hindi-name">(Manik)</p>
        </a>

        <a href={`${url}/opal`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/opal.png"
            alt="opal"
          />
          <p className="gem-english-name">Opal</p>
          <p className="gem-hindi-name">(Doodhiya Pathaar)</p>
        </a>

        <a href={`${url}/pearl`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/pearl.png"
            alt="pearl"
          />
          <p className="gem-english-name">Pearl</p>
          <p className="gem-hindi-name">(Moti)</p>
        </a>

        <a href={`${url}/hessonite`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/hesonite.png"
            alt="hessonite"
          />
          <p className="gem-english-name">Hessonite</p>
          <p className="gem-hindi-name">(Gomed)</p>
        </a>

        <a href={`${url}/cats-eye`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/cats-eye.png"
            alt="cats-eye"
          />
          <p className="gem-english-name">Cats Eye</p>
          <p className="gem-hindi-name">(Lehsunia)</p>
        </a>

        <a href={`${url}/emerald`}>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/products/gemstones/emerald.png"
            alt="emerald"
          />
          <p className="gem-english-name">Emerald</p>
          <p className="gem-hindi-name">(Panna)</p>
        </a>
      </section>
    </GemstoneHomepageBox>
  );
}
