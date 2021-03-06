'use strict';

module.exports = { getIntersectionNode, getIntersectionNode2 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  const map = new Map();
  while (headA) {
    map.set(headA, headA);
    headA = headA.next;
  }
  while (headB) {
    if (map.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode2(headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}
