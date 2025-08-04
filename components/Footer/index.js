// components/Footer.js

import React from "react";
import Link from "next/link";
import Button from "../Button"; // Giả sử bạn đã có component này
import Socials from "../Socials";

// Import các icon từ react-icons
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // --- DỮ LIỆU ĐỂ BẠN DỄ DÀNG CHỈNH SỬA ---
  const contactInfo = {
    name: "Tri Huu Bui",
    phone: "+84 903687220",
    email: "huutri10a3vvk@gmail.com",
    address: "Thu Duc, Ho Chi Minh city",
  };

  const socialLinks = {
    facebook: "https://www.facebook.com/huu.tri.645579",
    twitter: "https://x.com/dmaster26_",
    github: "https://github.com/HuuTri26",
  };

  // Link nhúng Google Map
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447176463989!2d106.69542821474863!3d10.77701489232085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36a5a2a22b%3A0x86e0952c6a2e2d8e!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1671089252378!5m2!1svi!2s";

  return (
    <footer className="mt-10 laptop:mt-40 p-2 laptop:p-0">
      <div className="container mx-auto">
        {/* Phần nội dung chính của Footer */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 laptop:gap-20">
          {/* Cột trái: Lời kêu gọi hành động */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Contact.</h2>
            <h3 className="text-4xl tablet:text-5xl laptop:text-6xl font-extrabold leading-tight">
              LETS WORK
            </h3>
            <h3 className="text-4xl tablet:text-5xl laptop:text-6xl font-extrabold leading-tight">
              TOGETHER
            </h3>
            {/* Class màu chữ này vẫn cần thiết để tạo độ tương phản nhẹ */}
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              If you have any questions or want to work together, please contact
            </p>
            <div className="mt-6">
              <Button type="primary">
                <a href="https://x.com/dmaster26_">Contact me</a>
              </Button>
            </div>
          </div>

          {/* Cột phải: Thông tin liên hệ và bản đồ */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaUser className="mr-3 text-blue-500" size={20} />
                <span>{contactInfo.name}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-500" size={20} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-500" size={20} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-blue-500" size={20} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={mapEmbedSrc}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>

        {/* Đường kẻ ngang và phần credit */}
        {/* Màu của đường kẻ ngang vẫn được xử lý cho light/dark mode */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            Made by{" "}
            <Link href={socialLinks.github} passHref>
              <a
                className="font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tri Huu Bui
              </a>
            </Link>
          </p>

          {/* Các icon mạng xã hội */}
          <div className="flex space-x-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
// Footer.js
// Footer component sử dụng Tailwind CSS để tạo giao diện responsive và đẹp mắt

export default Footer;
