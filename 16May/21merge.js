/**
 * Definition for singly-linked list.
 */
function ListNode(val, next = null) {
    this.val = (val === undefined ? 0 : val)
    this.next = next
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let dummy = new ListNode(0)
    let current = dummy

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    current.next = list1 || list2

    return dummy.next



};

// Test case: Linked list nodes তৈরি করি
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let result = mergeTwoLists(list1, list2);

// Result print করি
let current = result;
let output = [];
while (current) {
    output.push(current.val);
    current = current.next;
}
console.log(output);  // [1, 1, 2, 3, 4, 4]
