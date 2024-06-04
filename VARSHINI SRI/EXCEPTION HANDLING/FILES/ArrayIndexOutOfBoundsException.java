public class ArrayIndexOutOfBoundsException {
    public static void main(String[] args) {
        int rollno[] = new int[5];
        try{
            System.out.println(rollno[5]);
        }
        catch(Exception e){
            System.out.println("Something went wrong. " + e);
        }
        System.out.println("Array Index Out Of Bound Exception Handling");
    }
}
