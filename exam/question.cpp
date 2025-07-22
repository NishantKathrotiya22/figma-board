#include <iostream>
using namespace std;

// Define a node of the linked list
struct Node {
    int data;
    Node* next;
};

// Function to insert a node at the end
void append(Node*& head, int value) {
    Node* newNode = new Node{value, nullptr};

    if (!head) {
        head = newNode;
        return;
    }

    Node* temp = head;
    while (temp->next)
        temp = temp->next;
    temp->next = newNode;
}

// Function to print the linked list
void printList(Node* head) {
    while (head) {
        cout << head->data << " -> ";
        head = head->next;
    }
    cout << "NULL" << endl;
}

// Function to reverse the linked list
Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;

   while (current) {
        Node* next = current->next;
        prev = current;
        current->next = prev;
        current = next;
    }
return prev;

}

int main() {
    Node* head = nullptr;

    // Create list: 1 -> 2 -> 3 -> 4 -> NULL
    append(head, 1);
    append(head, 2);
    append(head, 3);
    append(head, 4);

    cout << "Original List:\n";
    printList(head);

    head = reverseList(head);

    cout << "Reversed List:\n";
    printList(head);

    return 0;
}
