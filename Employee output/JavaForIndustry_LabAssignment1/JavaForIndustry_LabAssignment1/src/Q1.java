import java.text.DecimalFormat;

public class Q1 {

    private static DecimalFormat df2 = new DecimalFormat("#.##");
    public static void main(String[] args) {
        //write your code here to output the employee details
        String Employee_Reference = ("Employee Reference " +
                                    "___________________" +
                                    " ID Number: 12345" +
                                    " Name: Jack Smith" +
                                    " Age: 52" +
                                    " Salary: 27,736.80");
        System.out.println(Employee_Reference);

        int num1 = 66 ,num2 = 52,sub;
        sub=num1-num2;

        String yearsToRetirement =("Years to retirement:"+sub);
        System.out.println(yearsToRetirement);
        double wage= (double) 27736.80;
        double week = 52;
        double week2 = 35;

        int nr1 = (int) wage;
        wage=(nr1/week)/week2;




        String hourlyRate = ("Hourly Wages:£"+df2.format(wage));
        System.out.println(hourlyRate);



    }

}
