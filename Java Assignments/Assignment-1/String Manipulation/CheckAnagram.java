// 3) Create a program to check if two strings are anagrams.

import java.util.Arrays;

public class CheckAnagram {

    // Check if two strings are anagrams
    public static boolean isAnagram(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }
        char[] arr1 = str1.toLowerCase().toCharArray();
        char[] arr2 = str2.toLowerCase().toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        String str1 = "Listen";
        String str2 = "Silent";
        System.out.println("Is '" + str1 + "' and '" + str2 + "' anagrams? ");
        System.out.println("Result: " + isAnagram(str1, str2));
    }
}
