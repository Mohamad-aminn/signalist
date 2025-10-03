import Image from "next/image";
import {ReactNode} from "react";

const Layout = ({children}: Readonly<{children: ReactNode}>) => {
    return (
        <section className={'auth-container'}>
            <div className={'form-container'}>
                <Image src={'/assets/icons/logo.svg'} alt={'Logo'}
                       quality={100} width={130} height={30}/>
                {children}
            </div>

            <div className={'auth-bg'}>
                <p className={'title'}>Signalist turned my watchlist into a winning list.<br/>
                    The alerts are spot-on, and I feel more confident<br/>
                    making moves in the market</p>

                <div className={'detail'}>
                    <div>__Ethan R.</div>
                    <div>stars</div>
                </div>

                <div className={'text-sm text-[#ccdadc]'}>Retail Investor</div>

                <Image src={'/assets/images/dashboard.png'} alt={'dashboard image'}
                       quality={100} width={2880} height={2324} className={'img'}/>
            </div>
        </section>
    )
}

export default Layout