// 1) Write a program to reverse a given string.

public class ReverseString {

    public static String reverseString(String str) {
        StringBuilder reversed = new StringBuilder(str);
        return reversed.reverse().toString();
    }

    public static void main(String[] args) {
        String sample = "Hello World";
        System.out.println("Original String: " + sample);
        System.out.println("Reversed String: " + reverseString(sample));
    }
}
