import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";

export const subLinks = [
  {
    id: 0,
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products" },
      { label: "terminal", icon: <FaCreditCard />, url: "/products" },
      { label: "connect", icon: <FaCreditCard />, url: "/products" },
    ],
  },
  {
    id: 1,
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/products" },
      { label: "libraries", icon: <FaBook />, url: "/products" },
      { label: "help", icon: <FaBook />, url: "/products" },
      { label: "billing", icon: <FaBook />, url: "/products" },
    ],
  },
  {
    id: 2,
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/products" },
      { label: "customers", icon: <FaBriefcase />, url: "/products" },
    ],
  },
];
