import java.io.*;
import java.util.Scanner;

public class FileReader {
    public static File fileName = new File("/Users/omart/Downloads/Mid-termTemplate/Mid-termTemplate/Metamorphosis.txt");
    static Scanner scan = null;

    public static void main(String[] args) throws IOException {

        int letters = countLetters(scan);
        int words = countWords(scan);
        int sentences = 0;
        int paragraphs = 0;

        FileInputStream fileInputStream = new FileInputStream(fileName);
        InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);

        String line;
        while ((line = bufferedReader.readLine()) != null) {
            if (line.equals("")) {
                paragraphs += 1;
            } else {
                String[] sentence = line.split("[!?.]+");
                sentences += sentence.length;
            }
        }
        if (sentences >= 1) {
            paragraphs++;
        }

        System.out.println("Number of letters in this file are " + letters);
        System.out.println("Number of words in this file are " + words);
        System.out.println("Number of sentences in this file are " + sentences);
        System.out.println("Number of paragraphs in this file are " + paragraphs);
    }

    public static int countWords(Scanner scan) {
        try {
            scan = new Scanner(fileName);
        } catch (FileNotFoundException e) {
            System.out.println("Can't find the file. Try changing the filePath");
        }
        int words = 0;
        while (scan.hasNextLine()) {
            if (scan.hasNext()) {
                String word = scan.next();
                words++;
            }
        }
        return words;
    }
    public static int countLetters(Scanner scan) {
        try {
            scan = new Scanner(fileName);
        } catch (FileNotFoundException e) {
            System.out.println("Can't find the file. Try changing the filePath");
            e.printStackTrace();
        }
        int letters = 0;
        while (scan.hasNext()) {
            String s = scan.nextLine();
            char[] analysis = s.toCharArray();
            for (char element : analysis) {
                if (Character.isLetter(element)) {
                    letters++;
                }
            }
        }
        return letters;
    }


}
