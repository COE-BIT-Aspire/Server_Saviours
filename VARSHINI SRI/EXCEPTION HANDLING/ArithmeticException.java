public class ArithmeticException {
    public static void main(String[] args) {
        int num1 = 0;
        int num2 = 5;

        try{
            num2 = 6/num1;
        }
        catch(Exception e){
            System.out.println("Something went wrong. " + e);
        }
        System.out.println(num2);
        System.out.println("Arithmetic Exception Handling");
    }
}
