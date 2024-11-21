import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const NotationMath = ({ distance1, distance2, speedPlane1, speedPlane2 }) => {
    const firstMult = distance1 * speedPlane1;
    const secondMult = distance2 * speedPlane2;
    const sumMult = (distance1 * speedPlane1) + (distance2 * speedPlane2);
    const firstSqrt = (Math.sqrt((distance1 ** 2) + (distance2 ** 2))).toFixed(2);
    const gradeDesc = (sumMult / firstSqrt).toFixed(2);
    const time1 = (distance1 / speedPlane1).toFixed(2);
    const time2 = (distance2 / speedPlane2).toFixed(2);

    return (
        <div className="bg-black text-white w-full flex flex-col pr-[5%] pt-[24%] pb-[5%]" style={{ fontFamily: "Arial, sans-serif" }}>
            <h1 className="font-bold text-xl">Calculation of Distances and Times</h1>
                <InlineMath>{"\\text{ }"}</InlineMath>
            <h2 className="font-bold text-lg">Initial data</h2>
                <InlineMath>{"\\text{ }"}</InlineMath>
            <p>
                Distance of plane 1 to the convergence point:{" "}
                <InlineMath>{`x = ${distance1} \\text{miles}`}</InlineMath>, speed:{" "}
                <InlineMath>{`v_x = ${speedPlane1} \\text{mph}`}</InlineMath>.
            </p>
            <p>
                Distance of plane 2 to the convergence point:{" "}
                <InlineMath>{`y = ${distance2} \\text{miles}`}</InlineMath>, speed:{" "}
                <InlineMath>{`v_y = ${speedPlane2} \\text{mph}`}</InlineMath>.
            </p>
            <InlineMath>{"\\text{ }"}</InlineMath>
            <h2 className="font-bold">Relationship Between Distances</h2>
            
            <BlockMath>{`s^2 = x^2 + y^2`}</BlockMath>

            <h2 className="font-bold">Rate of Change of Distance (<InlineMath>{"s"}</InlineMath>)</h2>
            <InlineMath>{"\\text{ }"}</InlineMath>
            <p>We derive the relationship:</p>
            <BlockMath>
                {"2s \\frac{ds}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}"}
            </BlockMath>
            <p>Simplifying:</p>
            <BlockMath>
                {"s \\frac{ds}{dt} = x \\frac{dx}{dt} + y \\frac{dy}{dt}"}
            </BlockMath>

            <h2>Calculation of <InlineMath>{"s"}</InlineMath></h2>
            <BlockMath>{`s = \\sqrt{x^2 + y^2} = \\sqrt{${distance1}^2 + ${distance2}^2} = ${firstSqrt}`}</BlockMath>

            <InlineMath>{"\\text{ }"}</InlineMath>
            <h2 className="font-bold text-lg">Substituted Values</h2>
            <BlockMath>{`${firstSqrt} \\frac{ds}{dt} = ${distance1}(-${speedPlane1}) + ${distance2}(-${speedPlane2})`}</BlockMath>
            <BlockMath>{`${firstSqrt} \\frac{ds}{dt} = -${firstMult} - ${secondMult} = -${(sumMult)}`}</BlockMath>
            <p>Solving for <InlineMath>{"\\frac{ds}{dt}"}</InlineMath>:</p>
            <BlockMath>
                {`\\frac{ds}{dt} = \\frac{-${(sumMult)}}{${firstSqrt}} = -${gradeDesc} \\text{mph}`}
            </BlockMath>
            <p>
                Therefore, the distance between the planes is decreasing at a
                rate of <InlineMath>{`-${gradeDesc} \\text{mph}`}</InlineMath>.
            </p>
            <InlineMath>{"\\text{ }"}</InlineMath>
            <h2 className="font-bold text-lg">Available Time</h2>
            <InlineMath>{"\\text{ }"}</InlineMath>
            <p>
                Time for plane 1:{" "}
                <BlockMath>{`t_1 = \\frac{x}{|v_x|} = \\frac{${distance1}}{${speedPlane1}} = ${time1} \\text{ hours}`}</BlockMath>
            </p>
            <p>
                Time for plane 2:{" "}
                <BlockMath>{`t_2 = \\frac{y}{|v_y|} = \\frac{${distance2}}{${speedPlane2}} = ${time2} \\text{ hours}`}</BlockMath>
            </p>
            <p>
                Both planes reach the convergence point in{" "}
                <InlineMath>{`${time1} \\text{ hours}`}</InlineMath> {`(${time1 * 60} minutes). Therefore,
                the air traffic controller has (${time1 * 60} minutes to act.`}
            </p>
        </div>
    );
};

export default NotationMath;