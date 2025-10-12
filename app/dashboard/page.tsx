import MarketOverview from "@/components/charts/MarketOverview";
import StockHeatMap from "@/components/charts/StockHeatMap";
import TopStories from "@/components/charts/TopStories";
import MarketData from "@/components/charts/MarketData";

const Page = () => {
    return (
        <div className={'dashboard'}>
            <div className={'charts-container'}>
                <div className={'size-48 rounded-md col-span-1 bg-gray-500'}></div>
                <div className={'size-48 rounded-md col-span-2 bg-gray-500'}></div>
                <div className={'size-48 rounded-md col-span-1 bg-gray-500'}></div>
                <div className={'size-48 rounded-md col-span-2 bg-gray-500'}></div>
                {/*<MarketOverview/>*/}
                {/*<StockHeatMap/>*/}
                {/*<TopStories/>*/}
                {/*<MarketData/>*/}
            </div>
        </div>
    );
};

export default Page