"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";

type Props = {
    name: string;
    href: string;
}

const ClintLink = ({name, href}: Props) => {
    const pathname = usePathname();

    return (
        <Link className={`nav-link ${pathname === href ? "text-white" : "text-[#9095A1]"}`} href={href}>{name}</Link>
    );
};

export default ClintLink;
