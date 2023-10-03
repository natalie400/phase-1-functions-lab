// Code your solution in this file!
function distanceFromHqInBlocks(pickUpBlock){
    const hqblocks=42
return Math.abs(pickUpBlock - hqblocks)
}
function distanceFromHqInFeet(pickUpBlock){
    const block =distanceFromHqInBlocks(pickUpBlock)
    return block * 264
}

function distanceTravelledInFeet(startDestination ,endDestination){
    return Math.abs(endDestination - startDestination)*264
}

function calculatesFarePrice(startDestination, endDestination) {
    const distance = distanceTravelledInFeet(startDestination , endDestination)
    if (distance<= 400){
        return 0
    }
    else if(distance <= 2000){
    return (distance-400)*0.02}
    else if (distance<=2500){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}