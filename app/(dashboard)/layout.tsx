import {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";

const Layout = ({children}: Readonly<{ children:ReactNode }>) => {
    return (
        <section className={'dashboard-sec'}>
            <Navbar/>
            <Search/>
            <div className={'dashboard'}>
                {children}
            </div>

        </section>
    );
};

export default Layout