const head = [1,2,3,4,5];

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}

const reverse = (head) => {
    if (head === null || head.next === null) return head;

    const newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}