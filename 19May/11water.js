/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let high
    let width
    let area = 0

    let left = 0;
    let right = height.length - 1

    while (left < right) {
        width = right - left

        high = Math.min(height[left], height[right])

        area = Math.max(area, high * width)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return area

};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
