public class Q2 {
    public static void main(String[] args) {
        //part 1: display even numbers between 0 and 1000
        int i = 2;
        while (i <= 1000) {
            System.out.println(i + "");
            i=i+2;
        }


        //part 2: display odd numbers between 0 and 1000
        int j = 1;
        while (j <= 1000) {
            System.out.println(j + "");
            j=j+2;
        }


        //part 3: display all the multiples of 4 between 0 and 1000
        int k = 0;
        while (k < 1000) {
            if(k%4 == 0){
                System.out.println(k+"");
            }
            k++;
        }


        //part 4: display all the numbers between 1 and 1000 replacing multiples of 3 with Java
        //multiples of 5 with Script and multiples of 3 and 5 with JavaScript
        int l = 0;
        while (l <= 1000) {
            if(l%5 == 0 && l%3 == 0 ){
                System.out.println("javaScript");
            }
            else if(l%5 == 0) {
                System.out.println("javaScript");
            }
            else if(l%3 == 0){
                System.out.println("java");

                }
            else{
                System.out.println(l+"");
            }

            l++;

        }

    }
}
