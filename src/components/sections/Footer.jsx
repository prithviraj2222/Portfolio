import React from "react";

function Footer() {
  return (
    <div className="relative w-full bg-[#5E67E6] dark:bg-[#D0FF71] z-50 text-white dark:text-[#303030]">
      <div className="py-10 px-6 md:px-[14%] flex flex-col gap-10 lg:gap-6">
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0">
          <div className="w-full ">
            <p className="text-md font-[paraFont]">Email :</p>
            <p className="text-lg font-[mainFont1]">
              sprithviraj@gmail.com
            </p>
          </div>
          <div className="w-full flex lg:justify-center">
            <div>
              <p className="text-md font-[paraFont]">
                Call Today :
              </p>
              <p className="text-lg font-[mainFont1]">
                +91 9887517453
              </p>
            </div>
          </div>
          <div className="w-full flex lg:justify-end">
            <div>
              <p className="text-md font-[paraFont]">Social :</p>
              <div className="flex gap-2">
                <a href="https://x.com/sprithviraj974" target="_blank" className="font-[mainFont1]">
                  <i className="text-2xl fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://github.com/prithviraj2222" target="_blank" className="font-[mainFont1]">
                  <i className="text-2xl fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/prithviraj-solanki/" target="_blank" className="font-[mainFont1]">
                  <i className="text-2xl fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-[#303030]"></div>
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="w-full">
            <p className="text-sm font-[paraFont]">
              © Copyright 2026. All Rights Reserved by Prithviraj
            </p>
          </div>
          <div className="w-full text-start sm:text-end">
            <p className="text-sm font-[paraFont]">
              Created by Prithviraj
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
