'use client'
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);



    return (
        <div className="advanced-chart" ref={container} style={{ height: "50%", width: "100%" }}>
            {/*<div className="tradingview-widget-container__widget advanced-chart" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>*/}
        </div>
    );
}

export default memo(TradingViewWidget);
