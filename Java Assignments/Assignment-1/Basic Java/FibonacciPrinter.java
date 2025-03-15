// 4) Write a program to print the Fibonacci sequence up to a specified number.

public class FibonacciPrinter {
    public static void printFibonacci(int terms) {
        int a = 0, b = 1;
        System.out.print("Fibonacci Sequence: " + a + " " + b);
        for (int i = 2; i < terms; i++) {
            int next = a + b;
            System.out.print(" " + next);
            a = b;
            b = next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        System.out.print("Fibonacci up to 5 terms: ");
        printFibonacci(5);
        System.out.print("Fibonacci up to 8 terms: ");
        printFibonacci(8);
    }
}
