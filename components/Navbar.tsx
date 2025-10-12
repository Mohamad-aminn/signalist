import {getUser} from "@/utils/serverActions";


const Navbar = async () => {
    const user = await getUser();

    return (
        <nav className={'navbar'}></nav>
    );
};

export default Navbar;
