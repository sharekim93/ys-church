import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 my-4 bg-light text-center">
      <Image src="/logo.png" width={250} height={100} alt="logo" />
      <p className="text-muted">
        (우) 476-823 경기도 양평군 양서면 북한강로 29
      </p>
      <p className="text-muted">
        TEL : 031-772-6161, 031-772-6162 / FAX : 031-772-6161
      </p>
      <p className="text-muted">
        Copyright 2023. Yangsu Church. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
