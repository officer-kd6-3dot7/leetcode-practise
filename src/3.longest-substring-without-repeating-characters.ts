/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  const map = new Map<string, number>();
  for (let l = 0, r = 0; r < s.length; r++) {
    const current_char = s.charAt(r);
    const last_seen = map.get(current_char);
    if (last_seen !== undefined && l <= last_seen) l = last_seen + 1;
    map.set(current_char, r);
    max = Math.max(max, r - l + 1);
  }
  return max;
}
// @lc code=end
console.log(lengthOfLongestSubstring("abcbacbb"));
