/*
https://leetcode.com/problems/find-smallest-letter-greater-than-target/

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Algo Logic:
we skip the null input array validation because the problem constraint is array length >= 2

check if the first letter is greather than target or the last is less, if true, target is not in the range, so return first

using binary search, we try to find the index of the target, we don't care if exists or not, the purpose of that is is to narrow the window between start and end as much as possible.

after binary search, we can return the array value at position start

in: 'c' 'f' 'j'
t: 'd'

in[0] = 'c' > 'd' => false
in[end = 2] = 'j' <= 'd' => false

bs:
  start = 0
  end = 2
  mid = 1
  midVal = 'f'

  'd' >= 'f' => false
    end = 1

  start = 0
  end = 1
  mid = 0
  midVal = 'c'

  'd' >= 'c' => true
    start = 1

  start = 1
  end = 1
  mid = 1
  midVal = 'f'

  'd' >= 'f' => false
    end = 2 => loop break

return arr[start] = arr[1] = 'f'

Costs:
TC O(log n)
SC O(1)
*/
function nextGreatestLetter(letters: string[], target: string): string {
    let start = 0;
    let end = letters.length - 1;

    if (letters[start] > target || letters[end] <= target) {
        return letters[0];
    }

    while (start <= end) {
        const mid = Math.floor((end + start) / 2);

        if (target >= letters[mid]) 
            start = mid + 1;
        else
            end = mid - 1;
    }

    return letters[start];
};
