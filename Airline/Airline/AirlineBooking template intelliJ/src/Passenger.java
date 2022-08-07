public class Passenger extends Person {
    //Declaring private variables
    private int holdBags;
    private String flightClass;

    public Passenger(String n, int p, String f, int h) {
        super(n, p);
        this.flightClass = flightClass;
        this.holdBags = holdBags;
    }


    @Override
    public double calculatePersonWeight() {
            return 0;
        }

    public int getholdBags() {
        return holdBags;
    }

    public void setHoldBags(int holdBags) {
        this.holdBags = holdBags;
    }

    public String getFlightClass() {
        return flightClass;
    }

    public void setFightClass(String fightClass) {
        this.flightClass = flightClass;
    }

}