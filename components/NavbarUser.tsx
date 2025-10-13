import {getUser} from "@/utils/serverActions";
import Image from "next/image";
import Link from "next/link";

const NavbarUser = async () => {
    const res = await getUser();

    return (
        <div className={'nav-utils from-opacity'}>
            {res ?
                <>
                    <Image src={res.data.image} alt={'user image'}
                           width={24} height={24} className={'utils-profile'}/>

                    <div className={'utils-username'}>{res?.data.name}</div>
                </>
                :
                <Link href={'/signup'} className={'utils-signup'}>Sign In</Link>
            }
        </div>
    );
};

export default NavbarUser;
