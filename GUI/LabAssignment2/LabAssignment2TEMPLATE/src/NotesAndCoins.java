public enum NotesAndCoins {

    PENCE1,PENCE2,PENCE3,PENCE4,PENCE5,POUND6,POUND1,POUND2,POUND5,POUND10,POUND20,POUND50
    ;


    //how many pence is each constant worth
    private int valueInP;
    //a user friendly name for the constant
    private String name;

    //add constructors and getters for valueInP and name

    NotesAndCoins(int valueInP, String name) {
        this.valueInP = valueInP;
        this.name = name;
    }

    NotesAndCoins() {


    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public int getValueInP() {
        return valueInP;
    }

    public void setValueInP(int valueInP) {
        this.valueInP = valueInP;
    }


    public static void main (String[]args){


    }
}


