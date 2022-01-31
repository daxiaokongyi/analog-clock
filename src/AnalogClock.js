import React from "react";

const AnalogClock = ({curSec, curMin, curHr, location}) => {
    // convert the current hands to correct degree
    let curSecDeg = curSec / 60 * 360;
    let curMinDeg = curMin / 60 * 360;
    let curHrDeg = curHr / 12 * 360;

    return (
        <div>
            <h1>{location}</h1>
            <div className="analog-clock">
                <div className="clock-hand clock-hand-sec" style={{transform: `translate(-50%) rotate(${curSecDeg}deg)`}}></div>
                <div className="clock-hand clock-hand-min" style={{transform: `translate(-50%) rotate(${curMinDeg}deg)`}}></div>
                <div className="clock-hand clock-hand-hr" style={{transform: `translate(-50%) rotate(${curHrDeg}deg)`}}></div>

                <div className="clock-number number-1">
                    <div>1</div>
                </div>
                <div className="clock-number min-number-1-1"></div>
                <div className="clock-number min-number-1-2"></div>
                <div className="clock-number min-number-1-3"></div>
                <div className="clock-number min-number-1-4"></div>

                <div className="clock-number number-2">
                    <div>2</div>
                </div>
                <div className="clock-number min-number-2-1"></div>
                <div className="clock-number min-number-2-2"></div>
                <div className="clock-number min-number-2-3"></div>
                <div className="clock-number min-number-2-4"></div>

                <div className="clock-number number-3">
                    <div>3</div>
                </div>
                <div className="clock-number min-number-3-1"></div>
                <div className="clock-number min-number-3-2"></div>
                <div className="clock-number min-number-3-3"></div>
                <div className="clock-number min-number-3-4"></div>

                <div className="clock-number number-4">
                    <div>4</div>
                </div>
                <div className="clock-number min-number-4-1"></div>
                <div className="clock-number min-number-4-2"></div>
                <div className="clock-number min-number-4-3"></div>
                <div className="clock-number min-number-4-4"></div>

                <div className="clock-number number-5">
                    <div>5</div>
                </div>
                <div className="clock-number min-number-5-1"></div>
                <div className="clock-number min-number-5-2"></div>
                <div className="clock-number min-number-5-3"></div>
                <div className="clock-number min-number-5-4"></div>

                <div className="clock-number number-6">
                    <div>6</div>
                </div>
                <div className="clock-number min-number-6-1"></div>
                <div className="clock-number min-number-6-2"></div>
                <div className="clock-number min-number-6-3"></div>
                <div className="clock-number min-number-6-4"></div>

                <div className="clock-number number-7">
                    <div>7</div>
                </div>
                <div className="clock-number min-number-7-1"></div>
                <div className="clock-number min-number-7-2"></div>
                <div className="clock-number min-number-7-3"></div>
                <div className="clock-number min-number-7-4"></div>

                <div className="clock-number number-8">
                    <div>8</div>
                </div>
                <div className="clock-number min-number-8-1"></div>
                <div className="clock-number min-number-8-2"></div>
                <div className="clock-number min-number-8-3"></div>
                <div className="clock-number min-number-8-4"></div>

                <div className="clock-number number-9">
                    <div>9</div>
                </div>
                <div className="clock-number min-number-9-1"></div>
                <div className="clock-number min-number-9-2"></div>
                <div className="clock-number min-number-9-3"></div>
                <div className="clock-number min-number-9-4"></div>

                <div className="clock-number number-10">
                    <div>10</div>
                </div>
                <div className="clock-number min-number-10-1"></div>
                <div className="clock-number min-number-10-2"></div>
                <div className="clock-number min-number-10-3"></div>
                <div className="clock-number min-number-10-4"></div>

                <div className="clock-number number-11">
                    <div>11</div>
                </div>
                <div className="clock-number min-number-11-1"></div>
                <div className="clock-number min-number-11-2"></div>
                <div className="clock-number min-number-11-3"></div>
                <div className="clock-number min-number-11-4"></div>

                <div className="clock-number number-12">
                    <div>12</div>
                </div>
                <div className="clock-number min-number-12-1"></div>
                <div className="clock-number min-number-12-2"></div>
                <div className="clock-number min-number-12-3"></div>
                <div className="clock-number min-number-12-4"></div>
            </div>
        </div>
    )
}

export default AnalogClock;
