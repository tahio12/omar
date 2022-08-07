import java.util.ArrayList;

public class Hand {
    private ArrayList<Card> hand = new ArrayList<>();
    private final String[] ranks = {"Royal Flush", "Straight Flush", "4-of-a-kind", "Full House", "Flush", "Straight",
            "3-of-a-kind", "2 Pair", "1 Pair", "High Card"};

    public void addCard(Card c){
        if(hand.size() < 5){
            hand.add(c);
        }
    }

    public String getHandRank(){
        if(hand.size() != 5){
            return "Incorrect hand size";
        }
        //sort the hand
        hand.sort(new SortCards());

        int[] v = new int[14];
        int[] s= new int[4];

        int pair = 0;

        boolean flush = false,
                fourOfKind = false,
                triple = false,
                series = true;


        int seriesValue = hand.get(0).getNumericValue()-1;

        for (int i = 0; i < hand.size(); i++){


            v[hand.get(i).getNumericValue()-1]++;

            seriesValue++;

            switch (hand.get(i).getSuit()){

                case "Hearts" : s[1]++;break;

                case "Spades": s[3]++;break;

                case "Diamonds": s[2]++;break;

                case "Clubs": s[0]++; break;

            }
            if(i == 4  && hand.get(4).getNumericValue() == 14 && hand.get(i-1).getNumericValue() == 5){
                series = true;
                }
            if(seriesValue != hand.get(i).getNumericValue()){
                series = false;
            }
            System.out.println(hand.get(i).toString());
        }

        for (int i: v) {
            if(i == 5){
                triple = true;
            }
        }
        for (int i: s) {
            if(i == 5){
                flush = true;
            }
            if(i == 2){
                pair++;
            }
        }

        //royal flush (J,Q,K,A,10 all the same suit)
        if((hand.get(0).getNumericValue() == 10) && flush){
            return ranks[0];
        }

        //straight flush (5 cards in a row all  same suit e.g. 3S, 4S, 5S, 6S, 7S)
        if(series && flush){
            return ranks[1];
        }

        //4 of a kind (4 cards with the same value e.g. 9S, 9C, 9H, 9D, 7D)
        for (int i: v) {
            if(i == 4){
                return ranks[2];
            }
        }

        //full house (3 of a kind and a pair e.g. 7S, 7H, 7D, 4C, 4H)
        if((pair == 1) && triple){
            return ranks[3];
        }

        //flush (All cards are in the same suit e.g. 3H, 7H, 9H, JH, KH)
        if(flush){
            return ranks[4];
        }

        //straight (A run of values in different suits e.g. 3H, 4D, 5H, 6C, 7S)
        if(series){
            return ranks[5];
        }

        //3 of a kind (3 cards with the same value and two others e.g. 7D, 7H, 7C, 2H, KS)
        if(triple){
            return ranks[6];
        }

        //two pair (2 pairs of matched values e.g. 7D, 7H, 4S, 4C, 2D)
        if(pair == 2){
            return ranks[7];
        }

        //one pair ( a pair of cards with the same value e.g. 7D, 7H, 4S, 6H, 8H)
        if(pair == 1){
            return ranks[8];
        }

        //high card (None of the other hands match, the highest value of the card)
        return ranks[9];
    }

    public String toString(){
        String output = "";
        for(Card c: hand){
            if(c.getSuit().equals("Hearts") || c.getSuit().equals("Diamonds")) {
                output += "\u001B[31m[ " + c.getValue() + " , " + c.getSuit() + " ] \u001B[0m";
            }
            else{
                output += "[ " + c.getValue() + " , " + c.getSuit() + " ] ";
            }
        }
        return output;
    }
}
