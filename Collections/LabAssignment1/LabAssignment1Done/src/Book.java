public class Book {
    private String title;
    private String author;
    private long isbn;
    private int pages;
    private int copiesInCollection;
    private int CopiesOnLoan;

    //1, complete this class with a constructor that has arguments for all the properties
    //and, getters and setters for each of them

    public Book(String t,String a, Long i, int p, int c, int CO){
        this.title = t;
        this.author = a;
        this.isbn = i;
        this.pages = p;
        this.copiesInCollection = c;
        this.CopiesOnLoan = CO;

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public long getIsbn() {
        return isbn;
    }

    public void setIsbn(long isbn) {
        this.isbn= isbn;
    }
    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }
    public int getCopiesInCollection() {
        return copiesInCollection;
    }

    public void setCopiesInCollection(int copiesInCollection) {
        this.copiesInCollection = copiesInCollection;
    }
    public int getCopiesOnLoan() {
        return CopiesOnLoan;
    }

    public void setCopiesOnLoan(int CopiesOnLoan) {
        this.CopiesOnLoan = CopiesOnLoan;
    }

//    public static void main(String[] args){
//      Book Book1 = new Book("", "", 1, 3, 2, 3);
//    System.out.println(Book1);
//
//    }
}
