import React from "react";
import { EducationTopicPageBox } from "../style";

export default function RingSize() {
  return (
    <EducationTopicPageBox>
      <h1>Ring Size</h1>
      <div className="ring-edu-row">
        <div className="ring-edu-content">
          <img
            src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/misc/ring-size.png"
            alt="ring"
          />
          <div>
            <h2>Use ring sizer to measure finger size</h2>
            <ol>
              <li>
                Print this page and compare the above printed scale with a real
                one.
              </li>
              <li>Scale comparison is a must.</li>
              <li>
                Place an existing ring above the scale and note the inner
                diameter in mm.
              </li>
              <li>
                Use the ring size chart to check the size in mm against the
                preferred column.
              </li>
            </ol>
          </div>
        </div>

        <a
          href="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/pdfs/ring-size-guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download our Ring Size Chart
        </a>
      </div>
    </EducationTopicPageBox>
  );
}
