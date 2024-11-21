
export const simulation = (distance1, distance2, speedPlane1, speedPlane2) => {
    // Calculate S
    const s = Math.sqrt((distance1 ** 2) + (distance2 ** 2));

    //Decreasing rate
    const decreasingRate = (((distance1 * speedPlane1) + (distance2 * speedPlane2)) / s).toFixed(2);

    //Time for a different flight route
    const timePlane1 = (distance1 / speedPlane1).toFixed(2);
    const timePlane2 = (distance2 / speedPlane2).toFixed(2);

    if (timePlane1 === timePlane2) {
        return `The controller has ${timePlane1} hours before the planes will be crash; and decreasing rate of distance between the planes is ${decreasingRate} mph.`;
    } else {
        return `The planes won´t be crash, because they have different time to get convergence point. Plane 1 and 2 have ${timePlane1} and ${timePlane2} hours respectively; and decreasing rate of distance between the planes is ${decreasingRate} mph.`;
    }
};
