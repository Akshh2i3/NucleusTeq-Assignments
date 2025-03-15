// Question.3) Create a program to convert a temperature from Celsius to Fahrenheit and vice versa.

public class TemperatureConverter {
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        double celsius = 25;
        double fahrenheit = 77;
        System.out.println(celsius + "°C = " + celsiusToFahrenheit(celsius) + "°F");
        System.out.println(fahrenheit + "°F = " + fahrenheitToCelsius(fahrenheit) + "°C");
    }
}
