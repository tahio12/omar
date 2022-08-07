import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class Flight {

    private int flightNumber;
    private Aircraft craft;
    private String startLocation;
    private String endLocation;
    private double distance;

    public ArrayList<Seat> seats;
    public ArrayList<CrewMember> crew;

    Flight(int fn, Aircraft c, String s, String e, double d) {
        this.flightNumber = fn;
        this.craft= c;
        this.startLocation= s;
        this.endLocation= e;
        this.distance= d;

        seats = new ArrayList<>();
        crew = new ArrayList<>();

        File Seats = craft.getLayoutFile();

        try{
            Scanner scanner = new Scanner(craft.getLayoutFile());
            Integer rowNumber =0;
            while (scanner.hasNextLine()){
                rowNumber++;
                String[] seatsRow = scanner.nextLine().split(",");
                for (int i = 0; i < seatsRow.length; i++){
                    if (seatsRow[i] == "F"){
                        seats.add(new Seat(rowNumber,i+1,"First"));
                    }else {
                        seats.add(new Seat(rowNumber,i+1,"Economy"));

                    }
                }
            }
        }catch (FileNotFoundException f){
            System.out.println("can't find layout file");
        }
    }





    public int getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(int flightNumber) {
        this.flightNumber = flightNumber;
    }

    public Aircraft getCraft() {
        return craft;
    }

    public void setCraft(Aircraft craft) {
        this.craft = craft;
    }

    public String getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(String startLocation) {
        this.startLocation = startLocation;
    }

    public String getEndLocation() {
        return endLocation;
    }

    public void setEndLocation(String endLocation) {
        this.endLocation = endLocation;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }




    public double calculateTakeOffWeight() {

        double totalFlightWeight = craft.getCraftWeight();
        for (Seat seat: seats){
            totalFlightWeight += seat.calculatePersonWeight();
        }
        for (CrewMember crewMember: crew){
            totalFlightWeight += crewMember.calculatePersonWeight();
        }
        return totalFlightWeight;

    }





    public int bookSeat(Passenger passenger) {
        return 0;
    }

    ArrayList<Passenger> arrayList = new ArrayList();


    @Override
    public String toString() {
        return "Flight{" +
                "flightNumber=" + flightNumber +
                ", craft=" + craft +
                ", startLocation='" + startLocation + '\'' +
                ", endLocation='" + endLocation + '\'' +
                ", distance=" + distance +
                ", arrayList=" + arrayList +
                '}';
    }

}