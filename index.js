// code your solution here
function superbowlWin(record) {
    const Win = record.find(item =>item.result === "W")
    return Win ? Win.year : undefined;
}
