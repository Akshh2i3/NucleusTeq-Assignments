// 2) Implement a program to find the largest number among three given numbers using a conditional statement.

public class LargestNumberFinder {
    public static void main(String[] args) {
        int a = 10, b = 25, c = 15;
        int largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
        System.out.println("Largest number is: " + largest);
    }
}