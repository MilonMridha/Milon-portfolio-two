import React from "react";

const Footer = () => {
  return (
    <div className="footer-content pb-10 -mt-10">
      <footer className="footer justify-center items-center gap-24 p-10 text-neutral-content max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2>Milon Mridha</h2>
          <p className="text-gray-600">All Rights Reserved @ Milon Mridha</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex gap-5">
            <a
              href="https://github.com/MilonMridha"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/milon2022/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a
              href="https://www.facebook.com/milon.mridha.71"
              target="_blank"
              rel="noreferrer"
            >
              <div className="action-box">
                {" "}
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
