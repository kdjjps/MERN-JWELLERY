import React from "react";
import { ModalBox } from "../style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function DiamondCertificateModal({ lab, status, closeModal }) {
  return (
    <ModalBox status={status}>
      <section id="diamond-certificate-modal">
        <div className="certImage">
          {lab === "GIA" ? (
            <img
              alt="gia"
              className="cert-image"
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/gia-cert.png"
            />
          ) : lab === "IGI" ? (
            <img
              alt="igi"
              className="cert-image"
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/igi-cert.png"
            />
          ) : lab === "HRD" ? (
            <img
              alt="hrd"
              className="cert-image"
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/hrd-cert.png"
            />
          ) : lab === "AGS" ? (
            <img
              alt="ags"
              className="cert-image"
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/ags-cert.png"
            />
          ) : (
            <img
              alt="gia"
              className="cert-image"
              src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/certification/gia-cert.png"
            />
          )}
        </div>
        <p className="title">This Diamond Comes With {lab} Certificate</p>
        <div>
          <p>
            To review a copy of the certificate, please contact our 24/7
            Customer Service
          </p>
          <p>+91-932-622-6145</p>
          <div className="seperator">
            <div className="seperator-text">or</div>
          </div>
          <button>Send A Message To Us</button>
        </div>
        <div className="close-button" onClick={() => closeModal(false)}>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ fontSize: "2.5rem", color: "rgb(30,46,76)" }}
          />
        </div>
      </section>
    </ModalBox>
  );
}
