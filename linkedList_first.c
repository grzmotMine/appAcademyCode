#include<stdio.h>
#include<stdlib.h>
struct Node{
    char* data;
    struct Node *next;
}*first=NULL;
void create(char* A[],int n){
    int i;
    struct Node *temp,*last;
    first=(struct Node *)malloc(sizeof(struct Node));
    first->data=A[0];
    first->next=NULL;
    last = first;
    for(int i = 1;i<n;i++){
        temp=(struct Node *)malloc(sizeof(struct Node));
        temp->data=A[i];
        temp->next=NULL;
        last->next = temp;
        last = temp;
    }
}
void display(struct Node *p){
    if(p!=NULL){
        //display(p->next); // printing in reverse order
        printf("%s\t%p\n",p->data,p->next);
        display(p->next);    
    }
} // display function is implemented with recursion and Stack memory
int count(struct Node *p){
    if(p==NULL) return(0);
    else return 1+count(p->next);
}
int main(){
    char* A[]={"i","am","a","happy","bum"};
    create(A,5);
    printf("Data\tAddress\n");
    display(first);
    int count1=count(first);
    printf("Total number of elements in the linked list is %d\n",count1);
    return(0);
}
