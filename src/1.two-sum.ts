/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (const [i, num] of nums.entries()) {
    const pos = map.get(target - num);
    if (pos !== undefined) return [pos, i];
    map.set(num, i);
  }
  return [-1, -1];
}
// @lc code=end
