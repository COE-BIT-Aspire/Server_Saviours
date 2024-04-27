function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

let width: number = 5;
let height: number = 10;
let area: number;

area = calculateRectangleArea(width, height);

console.log("The area of the rectangle is", area);
