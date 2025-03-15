// 2) Create a program to check if a number is even or odd.

public class EvenOddChecker {
    public static String checkEvenOdd(int num) {
        return num % 2 == 0 ? "Even" : "Odd";
    }

    public static void main(String[] args) {
        System.out.println("5 is " + checkEvenOdd(5));
        System.out.println("10 is " + checkEvenOdd(10));
    }
}
