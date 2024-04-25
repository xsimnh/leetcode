/*
 * @lc app=leetcode.cn id=2739 lang=csharp
 *
 * [2739] 总行驶距离
 */

// @lc code=start
public class Solution
{
    public int DistanceTraveled(int mainTank, int additionalTank)
    {
        int result = 0;
        while (mainTank >= 5)
        {
            mainTank -= 5;
            result += 50;
            if (additionalTank > 0)
            {
                additionalTank -= 1;
                mainTank += 1;
            }
        }
        return result + mainTank * 10;
    }
}
// @lc code=end

