import java.text.DecimalFormat;

public class Q3 {
    private static DecimalFormat df2 = new DecimalFormat("#.##");
    public static void main(String[] args) {

        double salary = 60000; // salaries 60000, 22000 , 45500, 14500, 48342.32.

        //write your code here to calculate the tax of the variable salary, make sure you try multiple values
        // to test your work
       double tax;
        tax = 0;

        if(salary >= 50000){
            double v = (15000 * 0.05);
            double b = (30000-20000);
            tax = (v + (salary - 30000 - b) * 0.4);
           double n = salary-tax;
            System.out.println("Tax on salary:" +df2.format(tax));
            System.out.println("salary after Tax:" +df2.format(n));
        }
        else if (salary >= 30000 && salary <= 50000){
            double v = (15000 * 0.05);
            tax = (v + (salary-30000)*0.2);
           double n = salary-tax;
            System.out.println("Tax on salary:" +df2.format(tax));
            System.out.println("salary after Tax:" +df2.format(n));
        }
        else if (salary >= 15000 && salary <= 30000){
            tax = ( (salary -15000)* 0.05);
          double n = salary-tax;
            System.out.println("Tax on salary:" +df2.format(tax));
            System.out.println("salary after Tax:" +df2.format(n));
        }
        else if (salary <= 15000){
            tax = ((salary)*0);
            double n = salary-tax;
            System.out.println("Tax on salary:" +df2.format(tax));
            System.out.println("salary after Tax:" +df2.format(n));
        }

    }
}

