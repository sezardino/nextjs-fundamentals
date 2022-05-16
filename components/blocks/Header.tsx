import { useUser } from "@/context";
import { generateAvatarFromName } from "@/helpers";
import { Link } from "@/types";
import { useState } from "react";

export const Header = () => {
  const { user } = useUser();
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropdown = () => setDropDownOpen(!dropDownOpen);

  const dropDownLinks: Link[] = [
    { href: "#", text: "Edit Profile" },
    { href: "#", text: "Account Settings" },
    { href: "#", text: "Sign Out" },
  ];

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold text-gray-800">
            DreamBim
          </div>
          <button className="relative" onClick={toggleDropdown}>
            <div className="cursor-pointer font-bold w-10 h-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
              {generateAvatarFromName(user.name)}
            </div>
            <ul
              className={`absolute top-0 mt-12 right-0 w-48 bg-white py-2 shadow-md border border-gray-100 rounded-lg z-40 text-left ${
                dropDownOpen ? "block" : "hidden"
              }`}
            >
              {dropDownLinks.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};
