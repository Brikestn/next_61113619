import Header from "./header";
import React, { useEffect, useState } from "react";
import Head from "../head/index";

function Layout(props) {
  // useEffect(() => {
  //   document.body.classList.add("js");
  // }, []);
  return (
    <>
    <Head />
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
