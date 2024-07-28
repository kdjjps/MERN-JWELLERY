import React from "react";
import { CreateDreamRingComponentBox } from "./style";

export default function CreateDreamRingComponent() {
  return (
    <CreateDreamRingComponentBox>
      <div>
        <h2>Create Your Dream Jewelry</h2>
      </div>
      <section>
        <div className="category-box">
          <h3>Solitaire Rings</h3>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-ring.jpg"
            alt="solitaire-ring"
          />
          <div>
            <a href="/create-your-own-ring/rings">Create Your Own Ring</a>
            <p>or</p>
            <a href="/preset-jewelry/rings">View All Preset Designs</a>
          </div>
        </div>
        <div className="category-box">
          <h3>Solitaire Necklaces</h3>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-pendant.jpg"
            alt="solitaire-necklace"
          />
          <div>
            <a href="/create-your-own-necklace/necklaces">
              Create Your Own Necklace
            </a>
            <p>or</p>
            <a href="/preset-jewelry/necklaces">View All Preset Designs</a>
          </div>
        </div>
        <div className="category-box">
          <h3>Solitaire Earrings</h3>
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-studs.jpg"
            alt="solitaire-studs"
          />
          <div>
            <a href="/create-your-own-stud/studs">Create Your Own Studs</a>
            <p>or</p>
            <a href="/preset-jewelry/studs">View All Preset Designs</a>
          </div>
        </div>
      </section>
    </CreateDreamRingComponentBox>
  );
}
