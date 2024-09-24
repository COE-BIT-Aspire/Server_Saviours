import java.util.Vector;

class VectorDemo {

    public static void main(String args[]) {
        Vector<String> employeeName = new Vector<>();

        employeeName.add("Varshini");
        employeeName.add("Saras");
        employeeName.add("Silpa");
        employeeName.add(0, "Jaya");

        System.out.println("Employee Names: " + employeeName);

        // Remove the employee "Silpa"
        boolean isRemoved = employeeName.remove("Silpa");
        System.out.println("Was 'Silpa' removed? " + isRemoved);
        
        System.out.println("Updated Employee Names: " + employeeName);
    }
}
