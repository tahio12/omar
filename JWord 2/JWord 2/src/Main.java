import javax.swing.*;
import javax.swing.border.Border;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.List;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileNotFoundException;


public class Main implements ActionListener {

    class WordPanel extends JPanel{
        JLabel[] wordColumns = new JLabel[5];
        public WordPanel() {
            this.setLayout(new GridLayout(1,5));
            Border blackBorder = BorderFactory.createLineBorder(Color.black);
            for(int i = 0; i<5; i++) {
                wordColumns[i] = new JLabel();
                wordColumns[i].setHorizontalAlignment(JLabel.CENTER);
                wordColumns[i].setOpaque(true);
                wordColumns[i].setBorder(blackBorder);
                this.add(wordColumns[i]);
            }
        }

        public void clearWordPanel() {
            for(int i = 0; i < 5; i++){
                wordColumns[i].setText("");
            }
        }

        public void setPanelText(String charValue, int position, Color color){
            this.wordColumns[position].setText(charValue);
            this.wordColumns[position].setBackground(color);
        }
    }

    class UserPanel extends JPanel{
        private JTextField userInput;
        private JButton okButton;
        public UserPanel() {
            this.setLayout(new GridLayout(1, 2));
            userInput = new JTextField();
            okButton = new JButton("OK");
            this.add(userInput);
            this.add(okButton);
        }
        public JTextField getUserInput() {
            return userInput;
        }

        public void setUserInput(JTextField userInput) {
            this.userInput = userInput;
        }

        public JButton getOkButton() {
            return okButton;
        }

        public void setOkButton(JButton okButton) {
            this.okButton = okButton;
        }
    }

    private JFrame gameFrame;
    private WordPanel[] wordPanelArray = new WordPanel[6];
    private UserPanel userPanel;
    private String wordleString;
    private int count = 0;

    public Main(){
        gameFrame = new JFrame("Wordle Game");
        gameFrame.setSize(300, 300);
        gameFrame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        gameFrame.setLayout(new GridLayout(7, 1));
        gameFrame.setVisible(true);
        gameFrame.setLocationRelativeTo(null);

        for(int i = 0; i<6; i++){
            wordPanelArray[i] = new WordPanel();
            gameFrame.add(wordPanelArray[i]);
        }
        userPanel = new UserPanel();
        userPanel.getOkButton().addActionListener(this);
        gameFrame.add(userPanel);
        gameFrame.revalidate();

        wordleString = getWordleString();
        System.out.println("Word for the day: " + wordleString);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String userWord = this.userPanel.getUserInput().getText();

        if(userWord.length() == 5){
            if (getDictionaryString().contains(userWord)) {
                if (isWordleWordEqualTo(userWord.trim().toUpperCase())) {
                    clearAllPanels();
                    JOptionPane.showMessageDialog(null, "You found the word!", "Congrats", JOptionPane.INFORMATION_MESSAGE);
                    gameFrame.dispose();
                    return;
                }
            }else {
                count--;
                JOptionPane.showMessageDialog(null, "Word is not in the dictionary", "Whoops",
                        JOptionPane.INFORMATION_MESSAGE);
            }
        } else {
            JOptionPane.showMessageDialog(null, "Incorrect Word Length!", "The word needs to be 5 lettered!", JOptionPane.INFORMATION_MESSAGE);
            count--;
        }
        if(count>5){
            JOptionPane.showMessageDialog(null, "You lost!", "Better luck next time", JOptionPane.INFORMATION_MESSAGE);
            gameFrame.dispose();
            return;
        }
        count++;
    }
    private void clearAllPanels() {
        for(int i = 0; i<=count; i++) {
            wordPanelArray[i].clearWordPanel();
        }
    }



    private boolean isWordleWordEqualTo(String userWord){
        List<String> wordleWordsList = Arrays.asList(wordleString.split(""));
        String[] userWordsArray = userWord.split("");
        List<Boolean> wordMatchList = new ArrayList<>();
        for(int i = 0; i<5; i++){
            if(wordleWordsList.contains(userWordsArray[i])){
                if(wordleWordsList.get(i).equals(userWordsArray[i])){
                    getActivePanel().setPanelText(userWordsArray[i], i, Color.GREEN);
                    wordMatchList.add(true);
                } else {
                    getActivePanel().setPanelText(userWordsArray[i], i, Color.YELLOW);
                    wordMatchList.add(false);
                }
            } else {
                getActivePanel().setPanelText(userWordsArray[i], i, Color.GRAY);
                wordMatchList.add(false);
            }
        }
        return !wordMatchList.contains(false);
    }

    public WordPanel getActivePanel() {
        return this.wordPanelArray[count];
    }
    public String getWordleString(){
        Path path = Paths.get("targetWords.txt");
        List<String> wordList = new ArrayList<>();
        try {
            wordList = Files.readAllLines(path);
        }catch (IOException e){
            e.printStackTrace();
        }
        Random random = new Random();
        int position = random.nextInt(wordList.size());
        return wordList.get(position).toUpperCase(Locale.ROOT);
    }

    public HashSet<String> getDictionaryString() {
        HashSet<String> dict = new HashSet<>();
        try{
            Scanner in_dict  = new Scanner(new File("gameDictionary.txt"));
            while(in_dict.hasNext()){
                dict.add(in_dict.next());
            }
            in_dict.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return dict;
        //returns the hashset of all the words in the dictionary.
    }

    public static void main(String[] args) {
        new Main();
    }
}
