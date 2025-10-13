import Image from "next/image";
import {navLinks} from "@/utils/constants";
import Link from "next/link";
import ClintLink from "@/components/ClintLink";
import NavbarUser from "@/components/NavbarUser";
import {Suspense} from "react";
import UserSkeleton from "@/components/skeletons/UserSkeleton";

const Navbar = async () => {


    return (
        <nav className={'navbar'}>
            <div className={'nav-container'}>
                <Link href={'/dashboard'}>
                    <Image src={'/assets/icons/logo.svg'} alt={'Logo'}
                           quality={100} width={130} height={30} priority/>
                </Link>

                <div className={'nav-links'}>
                    {navLinks.map((link, i) => (
                        <ClintLink key={i} {...link} />
                    ))}
                </div>
                    <Suspense fallback={<UserSkeleton/>}>
                        <NavbarUser/>
                    </Suspense>
            </div>

        </nav>
    );
};

export default Navbar;
