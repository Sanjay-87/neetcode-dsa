// const hasCycle = (head) => {
//     let fast = head;
//     let slow = head;

//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast === slow) {
//             return true;
//         }
//     }

//     return false;
// }

// ------------------------------
// ListNode Definition
// ------------------------------
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// ------------------------------
// Create Linked List from array
// ------------------------------
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// ------------------------------
// Optionally create a cycle
// pos = index where tail connects
// pos = -1 means no cycle
// ------------------------------
function createCycle(head, pos) {
    if (pos === -1 || head === null) return head;

    let tail = head;
    let cycleNode = null;
    let index = 0;

    while (tail.next !== null) {
        if (index === pos) {
            cycleNode = tail;
        }
        tail = tail.next;
        index++;
    }

    // Connect tail to the given index node
    tail.next = cycleNode;
    return head;
}

// ------------------------------
// Detect Cycle (Floyd's Algorithm)
// ------------------------------
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next; // moves two steps
        slow = slow.next;      // moves one step

        if (fast === slow) {   // pointers meet → cycle exists
            return true;
        }
    }

    return false;
};

// ------------------------------
// Example Usage
// ------------------------------

let list = createLinkedList([3, 2, 0, -4]);  
createCycle(list, 1); // cycle at node index 1 (value = 2)

console.log(hasCycle(list)); // true

// let list2 = createLinkedList([1, 2]);
// createCycle(list2, -1); // no cycle

// console.log(hasCycle(list2)); // false
