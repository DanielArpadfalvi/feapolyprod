const getPixelsByBoardPosition = (boardPosition) => {
    return {x: boardPosition.x * 96, y: boardPosition.y * 96};
}