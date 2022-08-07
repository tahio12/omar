public class Seat extends Person {
    private static Seat location;
    private int row;
    private int seat;
    private String flyingClass;
    private String allocatedTo;



    public Seat(Integer rowNumber, int s, String economy) {
        super(rowNumber,s,economy);

    }

    @Override
    public double calculatePersonWeight() {
        return 0;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }
    public int getSeat() {
        return seat;
    }

    public void setSeat(int seat) {
        this.seat = seat;
    }
    public String getFlyingClass() {
        return flyingClass;
    }

    public void setFlyingClass(String flyingClass) {
        this.flyingClass = flyingClass;
    }
    public String getAllocatedTo() {
        return allocatedTo;
    }

    public void setAllocatedTo(String allocatedTo) {
        this.allocatedTo = allocatedTo;
    }

}




