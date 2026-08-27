/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
import bst from "@datastructures-js/binary-search-tree";
import dq from "@datastructures-js/deque";
import g from "@datastructures-js/graph";
import h from "@datastructures-js/heap";
import ll from "@datastructures-js/linked-list";
import pq from "@datastructures-js/priority-queue";
import q from "@datastructures-js/queue";
import se from "@datastructures-js/set";
import st from "@datastructures-js/stack";
import t from "@datastructures-js/trie";

function twoSum(nums: number[], target: number): number[] {
  const { AvlTree, AvlTreeNode, BinarySearchTree, BinarySearchTreeNode } = bst;
  const { Deque } = dq;
  const { DirectedGraph, Graph } = g;
  const { Heap, MaxHeap, MinHeap } = h;
  const { DoublyLinkedList, DoublyLinkedListNode, LinkedList, LinkedListNode } =
    ll;
  const { MaxPriorityQueue, MinPriorityQueue, PriorityQueue } = pq;
  const { Queue } = q;
  const { EnhancedSet } = se;
  const { Stack } = st;
  const { Trie, TrieNode } = t;
  const map = new Map<number, number>();
  for (const [i, num] of nums.entries()) {
    const pos = map.get(target - num);
    if (!_.isEqual(pos, undefined)) return [pos!, i];
    map.set(num, i);
  }
  return [-1, -1];
}
// @lc code=end
