/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {


    let number = []

    list1.forEach(el => {
        number.push(el)
    });
    list2.forEach(el => {
        number.push(el)
    });


    return number.sort((a, b) => a - b)


};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
