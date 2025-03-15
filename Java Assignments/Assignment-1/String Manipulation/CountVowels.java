// 2) Implement a function to count the number of vowels in a string.

public class CountVowels {

    public static int countVowels(String str) {
        int count = 0;
        String vowels = "AEIOUaeiou";
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String sample = "Hello World";
        System.out.println("Number of vowels in '" + sample + "': " + countVowels(sample));
    }
}
