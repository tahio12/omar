public abstract class Person {
    private String name;
    private int passportNumber ;


    Person(String n, int p){
        this.name = n;
        this.passportNumber = p;

    }

    public Person(Integer rowNumber, int s, String economy) {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public int getpassportNumber() {
        return passportNumber;
    }

    public void setpassportNumber(int passportNumber) {
        this.passportNumber = passportNumber;
    }



    public abstract double calculatePersonWeight();{

    }



}
