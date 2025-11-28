function containsNearbyDuplicate(nums, k) {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    // If the number is already in the window, duplicate found
    if (window.has(nums[i])) return true;

    // Add current number into the window
    window.add(nums[i]);

    // If window size exceeds k, remove the oldest element
    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
}

const nums = [1,2,3,1], k = 3;
containsNearbyDuplicate(nums, k)
