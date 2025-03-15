// 1) Write a program to calculate the area of a circle, rectangle, or triangle based on user input.

public class CalculateArea {
    public static double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }

    public static double calculateRectangleArea(double length, double width) {
        return length * width;
    }

    public static double calculateTriangleArea(double base, double height) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        System.out.println("Circle Area (radius 5): " + calculateCircleArea(5));
        System.out.println("Rectangle Area (5x10): " + calculateRectangleArea(5, 10));
        System.out.println("Triangle Area (5x8): " + calculateTriangleArea(5, 8));
    }
}
