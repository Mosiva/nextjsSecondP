import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

export default function Button({ children, link }) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}
