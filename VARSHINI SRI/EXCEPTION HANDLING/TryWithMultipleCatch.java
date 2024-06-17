public class TryWithMultipleCatch {
    public static void main(String[] args) {
        int num1 = 0;
        int num2 = 5;
        int rollno[] = new int[5];
        String str = null;
        try{
            System.out.println(str.length());
            num2 = 6/num1;
            System.out.println(rollno[5]);}
        catch(ArithmeticException e){
            System.out.println("Cannot divide by zero.");}
        catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Stay in your limit.");}
        catch(Exception e){
            System.out.println("Something went wrong." + e);}}}
