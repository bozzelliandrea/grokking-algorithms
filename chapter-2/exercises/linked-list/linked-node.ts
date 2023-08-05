export default class LinkedNode<T> {

    value: T;
    next: LinkedNode<T> | null;

    constructor(value?: T, next?: LinkedNode<T>) {
        this.value = value ?? null;
        this.next = next ?? null;
    }

    public static fromArray<T>(source: T[]): LinkedNode<T> {
        let tmp: LinkedNode<T> = new LinkedNode(null);
        let head = tmp;

        for(let i = 0; i < source.length; i++) {
            if(tmp.value == null) {
                tmp.value = source[i]
            } else {
                tmp.next = new LinkedNode(source[i])
                tmp = tmp.next;
            }
        }

        return head;
    }

    public static toArray<T>(source: LinkedNode<T>): T[] {

        if(source == null)
            return [];

        const array: T[] = [];

        while(source != null && source.value != null) {
            array.push(source.value);

            source = source.next;
        }

        return array;
    }

    public static findFirst<T>(source: LinkedNode<T>, target: T): number {
        let index = 0

        while(source != null) {

            if(source.value == target)
                return index;

            source = source.next;
            index++;
        }

        return -1;
    }
}