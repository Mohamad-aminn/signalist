import {getUser} from "@/utils/serverActions";
import Image from "next/image";
import {navLinks} from "@/utils/constants";
import Link from "next/link";
import ClintLink from "@/components/ClintLink";


const Navbar = async () => {
    const user = await getUser();
    console.log(user)

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
                <div className={'nav-utils'}>
                    {user ?
                        <>
                            <Image src={user.image} alt={'user image'}
                                   width={24} height={24} className={'utils-profile'}/>

                            <div className={'utils-username'}>{user?.name}</div>
                        </>
                         :
                        <Link href={'/signup'} className={'utils-signup'}>Sign In</Link>
                    }
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
