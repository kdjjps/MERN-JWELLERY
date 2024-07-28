import React from "react";
import { EducationPageBox } from "../style";
import { BannerBox } from "../../common-style";

export default function MetalsEducation() {
  const banner =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/metal-education-banner.png";

  return (
    <EducationPageBox>
      <BannerBox image={banner}>
        <div>
          <h2>Metals Education</h2>
        </div>
      </BannerBox>
      <section id="metals-education">
        <div>
          <h1>Gold</h1>
          <p className="para">
            There are various grades of gold purity, determined by the ratio of
            their alloy composition and rated by a karat system. Typical karat
            purities range from 10 karats to 24 karats (pure gold), with a wide
            variation of usage from country to country. In the United States,
            the most popular composition is 14 karat gold.
          </p>

          <div className="sub-topic">
            <p className="para">
              Below are some of the most 
              <span style={{ fontWeight: "bold" }}>common gold densities</span>,
              along with the characteristics and pure gold content of each:
            </p>

            <h2>24 Karat Gold</h2>
            <p className="para">
              In its purest form, the metal is comprised of 100% gold with
              virtually no alloy metals. Pure gold is extremely soft and
              pliable, which is why it's often mixed with other metals, such as
              copper and silver, to forge jewelry.
            </p>

            <h2>22 Karat Gold</h2>
            <p className="para">
              This level of gold is 91.7% pure which is still too soft to make
              jewelry and not as durable as 18K or 14K.
            </p>

            <h2>18 Karat Gold</h2>
            <p className="para">
              This alloy consists of 75% gold and 25% alloy metals. 18 karat
              gold has been found to be the perfect balance between gold purity
              and strength. Brilliance offers a variety of exquisite 18 karat
              gold jewelry.
            </p>

            <h2>14 Karat Gold</h2>
            <p className="para">
              14 karat gold is 58.3% pure gold; the remainder is comprised of
              alloy metals. Any gold purity less than 14 karat gold is not
              recommended for high quality jewelry.
            </p>

            <h2>10 Karat Gold</h2>
            <p className="para">
              This tier of the metal consists of 41.7% gold. This is the minimum
              purity that can still be considered gold in the United States and
              is not used for high quality jewelry.
            </p>
          </div>

          <h2>Yellow Gold</h2>
          <p className="para">
            Yellow gold is considered to be the most precious gold color through
            which a majority of diamond jewelry products are made. Silver and
            copper alloys are mixed in it which makes it look so warm and shiny
            in color. The yellow color in yellow gold can be given different
            shades by changing its carat weight; higher the carat weight better
            is its shade.
          </p>

          <h2>White Gold</h2>
          <p className="para">
            It is preferred more for wedding and engagement rings. It gets its
            sheening silver color by adding a few alloys like zinc, copper,
            palladium and manganese to normal gold. The best quality white gold
            jewelry is 18 carats, which comprises of an amalgamation of
            palladium and yellow gold.
          </p>

          <h2>Rose Gold</h2>
          <p className="para">
            Considered an epitome of romance, copper and silver are added to
            normal gold in order to make rose gold. The intensity of the color
            depends on how much copper has been added to gold. It is also
            alluded to as “crown gold” and the most valuable rose gold has a 22
            carat weight but the rose gold that is normally used in making
            diamond jewelry comprises if 75% gold and 25% copper.
          </p>
        </div>

        <div>
          <h1>Silver</h1>
          <p className="para">
            Pure silver is quite soft and very malleable, making it really easy
            to damage. Because of this, silver is commonly alloyed with other
            metals to produce a more durable product. Sterling Silver is the
            standard for high-quality silver jewelry. It’s over 90% pure silver,
            mixed with alloys to add strength and durability. Sterling Silver
            also won’t wear down, as silver plating can do. The price of silver
            is determined by the labor, craftsmanship and design. Care should be
            taken regularly to prevent silver tarnish from building up and to
            keep it bright and sparkling.
          </p>
        </div>

        <div>
          <h1>Platinum</h1>
          <p className="para">
            Naturally white. Never fades or changes color and will last forever.
            It’s density and durability makes it the most secure metal for a
            setting with diamonds or gemstones. Platinum is very rare; in fact,
            it’s 30 times more so than gold. Though it’s the strongest of all
            the metals used in jewelry, it’s very malleable and can get
            scratched.
          </p>
        </div>
      </section>
    </EducationPageBox>
  );
}
