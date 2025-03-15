// 5) Use loops to print patterns like a triangle or square.

public class PatternPrinter {
    public static void printTriangle(int size) {
        for (int i = 1; i <= size; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void printSquare(int size) {
        for (int i = 1; i <= size; i++) {
            for (int j = 1; j <= size; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        System.out.println("Triangle Pattern (size 3):");
        printTriangle(3);
        System.out.println("Square Pattern (size 4):");
        printSquare(4);
    }
}
