/*
 * @lc app=leetcode.cn id=1146 lang=csharp
 *
 * [1146] 快照数组
 */

// @lc code=start
public class SnapshotArray
{
    private IList<Tuple<int, int>>[] _list;
    private int _count;
    public SnapshotArray(int length)
    {
        _list = new IList<Tuple<int, int>>[length];
        _count = 0;
        for (int i = 0; i < length; i++)
        {
            _list[i] = new List<Tuple<int, int>>();
        }
    }

    public void Set(int index, int val)
    {
        _list[index].Add(new Tuple<int, int>(_count, val));
    }

    public int Snap()
    {
        return _count++;
    }

    public int Get(int index, int snap_id)
    {
        int left = 0;
        int right = _list[index].Count;
        while (left < right)
        {
            int mid = left + (right - left) / 2;
            Tuple<int, int> item = _list[index][mid];
            if (item.Item1 > snap_id + 1 || (item.Item1 == snap_id + 1 && item.Item2 >= 0))
            {
                right = mid;
            }
            else
            {
                left = mid + 1;
            }
        }
        return left == 0 ? 0 : _list[index][left - 1].Item2;
    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * SnapshotArray obj = new SnapshotArray(length);
 * obj.Set(index,val);
 * int param_2 = obj.Snap();
 * int param_3 = obj.Get(index,snap_id);
 */
// @lc code=end

