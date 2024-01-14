class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        sorted_nums = sorted(nums)
        for i in range(len(sorted_nums)-1):
            l = sorted_nums[i]
            j = sorted_nums[i+1]
            if (l == j):
                return True

        return False