"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "symbol": "NASDAQ:AAPL",
          "colorTheme": "dark",
          "displayMode": "regular",
          "isTransparent": false,
          "locale": "en",
          "width": 425,
          "height": 550
        }`;
            container.current?.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container fundamental" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(TradingViewWidget);
