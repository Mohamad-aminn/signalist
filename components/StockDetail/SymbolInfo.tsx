"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "symbol": "NASDAQ:AAPL",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "width": "100%"
        }`;
            container.current?.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container symbol-info" ref={container}>
            <div className="tradingview-widget-container__widget max-h-[500px]"></div>
        </div>
    );
}

export default memo(TradingViewWidget);
