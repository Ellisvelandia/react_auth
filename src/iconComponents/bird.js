import * as React from "react";

const SvgComponent = (props) => (
  <div className="bird">
    <svg
      width={114}
      height={100}
      viewBox="0 0 572.06 200"
      style={{
      }}
      {...props}
    >
      <style>{".eye-ball{fill:#f6fdc4}"}</style>
      <g id="bird">
        <g
          style={{
            fill: "#85b8f4",
          }}
        >
          <path d="M48.42 78.11c0-17.45 14.14-31.58 31.59-31.58s31.59 14.14 31.59 31.58c0 17.44-14.14 31.59-31.59 31.59S48.42 95.56 48.42 78.11" />
          <path d="M109.19 69.88s-8.5-27.33-42.51-18.53c-34.02 8.81-20.65 91.11 45.25 84.73 40.39-3.65 48.59-24.6 48.59-24.6s-35.84-5.46-51.33-41.6" />
          <path
            d="M105.78 75.09c4.56 0 8.84 1.13 12.62 3.11l.01-.01 36.23 12.38s-13.78 30.81-41.96 38.09c-1.51.39-2.82.59-3.99.62-.96.1-1.92.16-2.9.16-15.01 0-27.17-12.17-27.17-27.17-.01-15.01 12.16-27.18 27.16-27.18"
            style={{
              fill: "#023f82",
            }}
          />
        </g>
        <g id="head">
          <path
            d="M50.43 68.52s-8.81 2.58-10.93 4.86l9.12 9.87c-.01-.01.14-8.97 1.81-14.73"
            style={{
              fill: "#f69c0d",
            }}
          />
          <circle className="eye-ball" cx={72} cy={71.5} r={11} />
          <circle
            cx={72}
            cy={71.5}
            r={7}
            style={{
              fill: "#1f2600",
            }}
          />
          <circle className="eye-ball" cx={77} cy={74} r={5} />
        </g>
      </g>
    </svg>
  </div>
);

export default SvgComponent;
