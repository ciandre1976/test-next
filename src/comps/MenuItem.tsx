import React from "react";
import Link from "next/link";


type Menu = {
  props: {
    title: string;
    address: string;
    Icon: any;
  };
};

export default function MenuItem({ title, address, Icon }: Menu) {
  return (
    <>
      <Link href={address} className="m-4 lg:mx-6 hover:text-amber-600">
        <Icon className="2xl sm:hidden mx-2" />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </>
  );
}
