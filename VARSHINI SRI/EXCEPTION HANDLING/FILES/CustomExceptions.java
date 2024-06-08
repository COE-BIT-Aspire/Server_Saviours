class CustomException extends Exception{
    public CustomException(String string){
        super(string);}}
public class CustomExceptions {
    public static void main(String[] args) {
        int num1 = 6;
        int num2 = 0;
        try{
            num2 = 3/num1;
            if(num2 == 0){
                throw new CustomException("I don't want to print zero");
            }
        }
        catch(ArithmeticException e){
            num2 = 3/1;
            System.out.println("That's the deafult output "+e);
        }
        catch(CustomException e){
            System.out.println("Something went wrong.."+e);
        }
        System.out.println(num2);}}
