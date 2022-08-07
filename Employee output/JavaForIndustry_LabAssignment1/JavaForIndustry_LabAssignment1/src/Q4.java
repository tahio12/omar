

public class Q4 {
    public static void main(String[] args) throws java.io.IOException {
        //write your answer here
        char choice;
        char h;
        do {
            System.out.println("Menu");
            System.out.println(" 1. Current Accounts");
            System.out.println(" 2. Credit cards");
            System.out.println(" 3. Loans");
            System.out.println(" 4. Savings account");
            System.out.println(" 5. Exit");
            choice = (char) System.in.read();

        } while(choice < '1' || choice >'5');
        System.out.println("\n");

        switch (choice) {
            case '1' -> System.out.println(" Current Accounts\n");
            case '2' -> System.out.println(" Credit cards\n");
            case '3' -> System.out.println(" Loans\n");
            case '4' -> System.out.println(" Savings account\n");
            case '5' -> System.out.println(" Exit\n");
            case 'h' -> {
                System.out.println(" Hang Up\n");
                System.exit(0);
            }
        }
    }
}
