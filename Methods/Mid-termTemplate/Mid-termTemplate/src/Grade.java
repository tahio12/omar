import java.util.ArrayList;
public class Grade {
    @Override
    public String toString() {
        return ("; grade: " + getLetterGrade(score));
    }
    public  ArrayList<Grade> grades = new ArrayList<>();
    private String subject;
    private int score;

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Grade (String subject, int score) {
        this.score =score;
        this.subject=subject;
    }

    public static char getLetterGrade(double score) {
        char grade = '0';
        if (score < 0 || score > 100) {
            grade = 'E';
        } else if (score >= 70) {
            grade = 'A';
        } else if (score >= 60) {
            grade = 'B';
        } else if (score >= 50) {
            grade = 'C';
        } else if (score >= 40) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        return grade;
    }
}