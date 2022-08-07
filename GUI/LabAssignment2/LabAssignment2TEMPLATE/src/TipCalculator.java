import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;




public class TipCalculator extends JFrame implements ActionListener {

    private JTextField textField;
    private JTextField textField1;
    private JTextField textField2;
    private JLabel label;


    TipCalculator(){
        this.setTitle("Meal Splitter");
        this.setSize(300,300);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        this.setLayout(new FlowLayout());

        JLabel Total = new JLabel("Total");
        textField = new JTextField(20);
        this.add(Total);
        this.add(textField);

        JLabel Tip = new JLabel("Tip(%)");
        textField1 = new JTextField(20);
        this.add(Tip);
        this.add(textField1);

        JLabel People = new JLabel("People");
        textField2 = new JTextField(20);
        this.add(People);
        this.add(textField2);

        JButton split = new JButton("Calculate");
        this.setLayout(new GridLayout(0,1));
        label = new JLabel("Each person Should Pay");
        this.add(split);
        this.add(label);
        split.addActionListener(this);
        this.setVisible(true);


    }
    @Override
    public void actionPerformed(ActionEvent e) {

        double total = Double.parseDouble(textField.getText());
        double tax = Double.parseDouble(textField1.getText());
        double split = Double.parseDouble(textField2.getText());

        tax = tax/100;
        total =(total*tax)+total;

        label.setText("Each person Should Pay: £"+ total/split);




    }


    public static void main(String[] args){
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new TipCalculator();
            }
        });
    }
}