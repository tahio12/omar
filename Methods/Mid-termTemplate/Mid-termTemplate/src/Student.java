import java.util.ArrayList;

public class Student {

    @Override
    public String toString() {
        return ("Student Name: "+name+
                "; Student No: "+ studentNumber +
                "; Department: "+ department +
                "; Age : " + age +
                "; Full Time? : " + fullTime +
                "; username: " + userName +
                "; grade: " + grades);
    }
    public ArrayList<Grade> grades = new ArrayList<>();

    private String name;
    private String department;
    private int age;
    private String userName;
    private int studentNumber;
    private boolean fullTime;

    public Student(){
        this.name = null;
        this.department = null;
        this.age = -1;
        this.userName = null;
        this.studentNumber =-1;
        this.fullTime = false;

    }

    public Student(String name, String department, int age, int studentNumber, boolean fullTime){
        this.name = name;
        this.department = department;
        this.age =age;
        this.userName = userName;
        this.studentNumber =studentNumber;
        this.fullTime = fullTime;
        char firstNameInitial = name.charAt(0);
        int whiteSpace = name.indexOf(" ");
        String lastNameLetters = name.substring(whiteSpace+1, whiteSpace+5);
        int lengthOfStudentNumber = String.valueOf(studentNumber).length();
        int first3StudentDigits = (int)Math.floor((studentNumber / Math.pow(10, lengthOfStudentNumber - 3)));
        userName = (firstNameInitial+lastNameLetters+first3StudentDigits);
        grades.add(new Grade("programming", 52));

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(int studentNumber) {
        this.studentNumber = studentNumber;
    }

    public boolean isFullTime() {
        return fullTime;
    }

    public void setFullTime(boolean fullTime) {
        this.fullTime = fullTime;
    }

}
