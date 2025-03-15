// 1) Create a class to represent a student with attributes like name, roll number, and marks.
// 2) Implement inheritance to create a "GraduateStudent" class that extends the "Student" class with additional features.
// 3) Demonstrate polymorphism by creating methods with the same name but different parameters in a parent and child class.

class Student {
    String name;
    int rollNumber;
    double marks;
    String researchTopic;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public Student(String name, int rollNumber, double marks, String researchTopic) {
        this(name, rollNumber, marks);
        this.researchTopic = researchTopic;
    }

    public void displayInfo() {
        System.out.println("Name: " + name + ", Roll Number: " + rollNumber + ", Marks: " + marks);
        if (researchTopic != null) {
            System.out.println("Research Topic: " + researchTopic);
        }
    }
}

class PolymorphismDemo extends Student {
    public PolymorphismDemo(String name, int rollNumber, double marks) {
        super(name, rollNumber, marks);
    }

    public PolymorphismDemo(String name, int rollNumber, double marks, String researchTopic) {
        super(name, rollNumber, marks, researchTopic);
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("This is from Polymorphism Demo");
    }
}

public class OOPConcepts {
    public static void main(String[] args) {
        Student student = new Student("Akshay", 101, 88.5);
        student.displayInfo();

        Student gradStudent = new Student("Aman", 102, 92.0, "Block Chain Architecture");
        gradStudent.displayInfo();

        PolymorphismDemo poly = new PolymorphismDemo("Abhay", 103, 95.0);
        poly.displayInfo();
    }
}