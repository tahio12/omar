import java.util.ArrayList;

public class StudentMain {
    public static void main(String[] args) {
        ArrayList<Student> arrayList = new ArrayList<>();
        Student bert = new Student("Bert Smith", "Computing", 21, 12345, true);
        arrayList.add(bert);
        System.out.println(bert);
        Student olivia = new Student("Olivia Green", "Computing", 19, 23464, true);
        arrayList.add(olivia);
        System.out.println(olivia);
        Student Eloise = new Student("Eloise Jones", "Computing", 18, 34744, true);
        arrayList.add(Eloise);
        System.out.println(Eloise);
        Student Ben = new Student("Ben Bird", "Computing", 42, 34834, false);
        arrayList.add(Ben);
        System.out.println(Ben);
        Student Karen = new Student("Karen Brown", "Computing", 19, 45632, false);
        arrayList.add(Karen);
        System.out.println(Karen);

    }
}