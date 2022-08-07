import java.io.File;
import java.util.ArrayList;

public class Aircraft {
    private String make;
    private String model;
    private String tailNumber;
    private double craftWeight;
    private double maximumTakeoffWeight;
    private File layoutFile;
    private Object Aircraft;


    Aircraft(String m, String mo, String t, double c, double ma, File l){
        this.make = m;
        this.model = mo;
        this.tailNumber = t;
        this.craftWeight = c;
        this. maximumTakeoffWeight =ma;
        this.layoutFile = l;

    }
    @Override
    public String toString() {
        return ("Make: "+make+
                "; Model: "+ model +
                "; Tail: "+ tailNumber +
                "; Weight : " + craftWeight  +
                "; Take-off Weight: " + maximumTakeoffWeight +
                "; Aircraft: " + Aircraft);
    }
    public ArrayList<Aircraft> aircraft = new ArrayList<>();





    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
    public String getTailNumber() {
        return tailNumber;
    }

    public void setTailNumber(String tailNumber) {
        this.tailNumber = tailNumber;
    }
    public double getCraftWeight() {
        return craftWeight;
    }

    public void setCraftWeight(double craftWeight) {
        this.craftWeight = craftWeight;
    }
    public double getMaximumTakeoffWeight() {
        return maximumTakeoffWeight;
    }

    public void setMaximumTakeoffWeight(double maximumTakeoffWeight) {
        this.maximumTakeoffWeight = maximumTakeoffWeight;
    }
    public File getLayoutFile() {
        return layoutFile;
    }

    public void setLayoutFile(File layoutFile) {
        this.layoutFile = layoutFile;
    }
}

