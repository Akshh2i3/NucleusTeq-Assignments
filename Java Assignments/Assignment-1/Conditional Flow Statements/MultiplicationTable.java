// 3) Use a for loop to print a multiplication table.

public class MultiplicationTable {
    public static void main(String[] args) {
        int num = 5;
        System.out.println("Multiplication Table for " + num + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}