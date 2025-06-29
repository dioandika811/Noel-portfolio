import "../styles/About.css";
import { IoFootballOutline } from "react-icons/io5";
import { FaPlaystation } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiMikrotik } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Nama saya adalah Noel Efrata Sianturi saya lahir di Medan,4 Oktober
          2006.Saya lulusan dari SMK 1 RAKSANA MEDAN,Jurusan TKJ.Saya juga dulu
          pernah latihan bolaa di Harimau Tapanuli FC,saya bisa di beberapa
          posisi,Gelandang bertahan,Center Bek,Bek kiri,dan juga Bek kanan
        </p>
        <p>Saya pernah PKL di Universitas Sari Mutiara selama 3 bulan</p>
        <h4>Fotball Player & Gamer</h4>
        <div className="skills">
          <IoFootballOutline />
          <FaPlaystation />
          <FaLinux />
          <SiMikrotik />
          <FaWindows />
          <SiKalilinux />
        </div>
      </div>
    </section>
  );
}

export default About;
