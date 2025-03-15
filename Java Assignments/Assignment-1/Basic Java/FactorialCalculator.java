// 3) Implement a program to find the factorial of a given number.

public class FactorialCalculator {
    public static long calculateFactorial(int num) {
        long factorial = 1;
        for (int i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + calculateFactorial(5));
        System.out.println("Factorial of 7: " + calculateFactorial(7));
    }
}
