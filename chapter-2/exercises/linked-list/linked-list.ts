import LinkedNode from "./linked-node";

export default class LinkedList<T> {
    head: LinkedNode<T>;
    tail: LinkedNode<T>;

    constructor(value?: T) {
        this.head = new LinkedNode(value, null);
        this.tail = this.head;
    }

    public add(value: T) {
        this.tail.next = new LinkedNode(value, null);
        this.tail = this.tail.next;
    }

    public static fromArray<T>(source: T[]): LinkedList<T> {
        const linkedlist: LinkedList<T> = new LinkedList();

        for(let i = 0; i < source.length; i++) {
            linkedlist.add(source[i]);
        }

        return linkedlist;
    }
}