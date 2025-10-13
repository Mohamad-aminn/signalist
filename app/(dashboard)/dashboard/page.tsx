import MarketOverview from "@/components/charts/MarketOverview";
import StockHeatMap from "@/components/charts/StockHeatMap";
import TopStories from "@/components/charts/TopStories";
import MarketData from "@/components/charts/MarketData";

const Page = async () => {
    return (
            <div className={'charts-container'}>
                <MarketOverview/>
                <StockHeatMap/>
                <TopStories/>
                <MarketData/>
            </div>
    );
};

export default Page