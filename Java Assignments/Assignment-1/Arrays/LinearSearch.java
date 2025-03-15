// 3) Create a program to search for a specific element within an array using linear search.

public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = { 10, 20, 30, 40, 50 };
        int target = 30;
        boolean found = false;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                found = true;
                System.out.println("Element " + target + " found at index " + i);
                break;
            }
        }
        if (!found) {
            System.out.println("Element " + target + " not found.");
        }
    }
}