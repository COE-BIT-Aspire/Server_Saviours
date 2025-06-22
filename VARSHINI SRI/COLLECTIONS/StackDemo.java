import java.util.Stack;

class StackDemo{

public static void main(String args[]){

Stack<String> employeeName = new Stack<String>();

employeeName.push("Varshini");
employeeName.push("Saras");
employeeName.push("Silpa");

System.out.println(employeeName);

String removemployee = employeeName.pop();
System.out.println(removemployee);

}
}