const list1 = [1,2,4], list2 = [1,3,4];
// output: [1,1,2,3,4,4]

const mergeTwoLists = function (list1, list2) {
    const dummy = { val: 0, next: null };
    let node = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }

        node = node.next;
    }


    node.next = list1 || list2;

    return dummy.next;
}