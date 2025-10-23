import SymbolOverview from "@/components/StockDetail/SymbolOverview";
import AdvancedChart from "@/components/StockDetail/AdvancedChart";
import SymbolInfo from "@/components/StockDetail/SymbolInfo";
import TechnicalAnalysis from "@/components/StockDetail/TechnicalAnalysis";
import CompanyProfile from "@/components/StockDetail/CompanyProfile";
import Fundamental from "@/components/StockDetail/Fundamental";

const Page = async ({params}: {params: Promise<{ stock:string }>}) => {
    const {stock} = await params

    return <div className={'stock'}>
        <div className={'first-section'}>
            <SymbolInfo/>
            <AdvancedChart/>
            <SymbolOverview/>

        </div>

        <div className={'second-section'}>
            <TechnicalAnalysis/>
            <CompanyProfile/>
            <Fundamental/>
        </div>
    </div>
}

export default Page