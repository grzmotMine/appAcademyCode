struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode *result;
    ListNode *dump = new ListNode((int)0);
    ListNode **sum = &result;
    int carry = 0;
    int now = 0;
    while(l1 != dump || l2 != dump || carry != 0)
    {
        now = (l1->val + l2->val + carry)%10;
        carry = (l1->val + l2->val + carry)/10;
        *sum = new ListNode(now);
        sum = &(*sum)->next;    
        if (l2->next == nullptr)
            l2 = dump;
        else l2 = l2->next;
        if (l1->next == nullptr)
            l1 = dump;
        else l1 = l1->next;
    }
    delete dump;
    return result;
        
    }
};