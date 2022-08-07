import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;


public class BookCollection {
    private ArrayList<Book> books = new ArrayList<Book>();

    //2, complete constructor that takes a string path (the BookList file name) load the books from BookList into the books arrayList
    //When complete books should have 100 items. Make sure you don't include the header row!
    BookCollection(String path) {
        try {
            Scanner scan = new Scanner(new File("\\Computer Science\\Year 2\\Term 2\\Extended java\\Week 2\\LabAssignment1\\LabAssignment1Done\\BookList.csv"));
            scan.nextLine();
            while (scan.hasNext()) {
                String[] row = scan.nextLine().split(",");
                Book k = new Book(row[0],
                             row[1],
                             Long.parseLong(row[2]),
                             Integer.parseInt(row[3]),
                             Integer.parseInt(row[3]),
                             Integer.parseInt(row[3]));

                books.add(k);
                System.out.println(Arrays.toString(row));

            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
//    //3, Return a HashSet of all the authors in the book list
    public HashSet<String> getAuthors() {

        // create new hashset
        HashSet<String> hs = new HashSet<String>();

        File file = new File("\\Computer Science\\Year 2\\Term 2\\Extended java\\Week 2\\LabAssignment1\\LabAssignment1Done\\BookList.csv");
        Scanner a;
        try {
            a = new Scanner(file);
            String[] head = a.nextLine().split(",");

            while (a.hasNext()) {
                String[] row = a.nextLine().split(",");
                hs.add(row[1]);
            }
            a.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        return hs;
    }

    //4, return an arrayList of books with more than 750 pages
    public ArrayList<Book> getLongBooks() {

        for (Book book: books) {
            if(book.getPages() > 750){
                books.add(book);
            }
        }
        return  books;
    }

    //5, return the book if the given title is in the list.
    public Book getBookByTitle(String title) {

        for (Book book : books) {
            if (book.getTitle().equals(title)) {
                return book;
            }
        }
        return null;
    }

    //6, return an array of the 10 most popular books (That is those that currently have most copies on loan)
    public Book[] mostPopular() {
        Book[] array = new Book[10];
        books.sort((Comparator<? super Book>) this);
        for (int j = 0; j < 10; j++) {
            array[j] = books.get(j);
        }
        return array;
    }
}

