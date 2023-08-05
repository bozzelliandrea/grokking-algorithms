import LinkedList from "./linked-list";

type Constructor<T> = new (...args: any[]) => T;

export default class Assert {

    public static assertEquals<T>(expected: T, actual: T): void {
        if(expected != actual) {
            this.logError('Assertion fail!');
            throw new Assert.AssertionError("Expected: " + expected + " , actual: " + actual);
        }
        else
            this.logSuccess('Assertion success.');
    }

    public static assertTrue(value: boolean): void {
        this.assertEquals(true, value);
    }

    public static assertFalse(value: boolean): void {
        this.assertEquals(false, value);
    }

    public static assertThrowsError(clazz: Constructor<Error>, fx: (...args: any[]) => void) {
        try {
            fx();
        } catch (error: any) {
            if(error instanceof clazz) {
                this.logSuccess("Assertion success, found wanted error " + error)
            } else {
                this.logError("Not catched error found!")
                throw error;
            }
        }
    }

    public static assertLinkedList<T>(l1: LinkedList<T>, l2: LinkedList<T>): void {
    

        while(l1.head != null && l2.head != null) {
            if(l1.head.value != l2.head.value) {
                this.logError("ERROR, VALUES ARE DIFFERENT!");
                return;
            }
    
            l1.head = l1.head.next;
            l2.head = l2.head.next;
        }
    
        if(l1.head == null && l2.head != null) {
            this.logError("LIST 2 SIZE IS GREATER THAN LIST 1");
            return;
        }
    
        if(l2.head == null && l1.head != null) {
            this.logError("LIST 1 SIZE IS GREATER THAN LIST 2");
            return;
        }
    
        this.logSuccess("LISTS VALUES ARE EQUALS!");
    }

    private static logSuccess(message: string): void {
        console.log(`\x1b[32m ${message} \x1b[0m`);
    }

    private static logError(message: string): void {
        console.log(`\x1b[31m ${message} \x1b[0m`);
    }

    static AssertionError = class extends Error {
        
        message: string;

        constructor(message?: string) {
            super(message);
            this.message = message;
        }
    }
}