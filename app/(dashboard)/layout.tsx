import {ReactNode} from "react";
import Navbar from "@/components/Navbar";

const Layout = ({children}: Readonly<{ children:ReactNode }>) => {
    return (
        <section className={'dashboard-sec'}>
            <Navbar/>
            <div className={'dashboard'}>
                {children}
            </div>

        </section>
    );
};

export default Layout