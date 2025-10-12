import MarketOverview from "@/components/charts/MarketOverview";
import StockHeatMap from "@/components/charts/StockHeatMap";
import TopStories from "@/components/charts/TopStories";
import MarketData from "@/components/charts/MarketData";

const Page = () => {
    return (
        <div className={'dashboard'}>
            <div className={'charts-container'}>
                <MarketOverview/>
                <StockHeatMap/>
                <TopStories/>
                <MarketData/>
            </div>
        </div>
    );
};

export default Page