import React from "react";
import { Menu } from "antd";
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};
const items = [
  getItem("Woman's Fashion", "sub1", <></>, [
    getItem(
      "Clothing",
      null,
      null,
      [getItem("Woman's Shirts", "1"), getItem("Woman's Pants", "2")],
      "group"
    ),
    getItem(
      "Accessories",
      null,
      null,
      [getItem("Woman's Shoes", "3"), getItem("Woman's Glasses", "4")],
      "group"
    ),
  ]),
  getItem("Man's Fashion", "sub2", <></>, [
    getItem(
      "Clothing",
      null,
      null,
      [getItem("Man's Shirts", "5"), getItem("Man's Pants", "6")],
      "group"
    ),
    getItem(
      "Accessories",
      null,
      null,
      [getItem("Man's Shoes", "7"), getItem("Man's Glasses", "8")],
      "group"
    ),
  ]),
  getItem("Electornics", "sub3"),
  getItem("Home & Lifestyle", "sub4"),
  getItem("Medicine", "sub5"),
  getItem("Sports & Outdoor", "sub6"),
  getItem("Baby's & Toys", "sub7"),
  getItem("Groceries & Pets", "sub8"),
  getItem("Health & Beauty", "sub9"),
];

const SideBar = () => <Menu className="w-48" mode="vertical" items={items} />;
export default SideBar;
