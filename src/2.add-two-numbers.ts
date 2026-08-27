/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  const head = new ListNode(carry);
  let tail: ListNode | undefined;
  const accumulate = (acc: ListNode, curr: ListNode) => {
    acc.val += curr.val;
    return curr.next;
  };
  do {
    tail = tail?.next ?? head;
    if (l1) l1 = accumulate(tail, l1);
    if (l2) l2 = accumulate(tail, l2);
    carry = (tail.val / 10) | 0;
    tail.val %= 10;
    if (l1 || l2 || carry) tail.next = new ListNode(carry);
  } while (l1 || l2);
  return head;
}
// @lc code=end
