class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        product = None
        loopProduct = None
        for i in range(len(nums)):
            for j in range(i,len(nums)):
                if ((i == 0) and (j == i) and nums[i] != None):
                    product = nums[i]
                    loopProduct = nums[i]
                    continue
                elif(j == i and nums[j] > product):
                    loopProduct = nums[j]
                    product = nums[j]
                elif(nums[j] != None and nums[j] > product and j == i ):
                    loopProduct = nums[j]
                    continue
                elif(j == i):
                    loopProduct = nums[j]
                    continue
                elif(nums[j] == None):
                    break
                    
                elif(nums[j] == 0 and loopProduct * 0 > product):
                    product = 0
                    loopProduct = 0
                    continue
                    
                elif(loopProduct * nums[j] > product):
                    product = loopProduct * nums[j]
                    loopProduct *= nums[j]
                    continue
                elif(loopProduct * nums[j] == product):
                    product = loopProduct * nums[j]
                    loopProduct *= nums[j]
                    continue
                elif(loopProduct * nums[j] < product):
                    loopProduct *= nums[j]
                    continue
                    
        return product
                
                
        