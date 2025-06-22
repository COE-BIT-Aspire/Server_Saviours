class Calculator{
    public int add(int value1, int value2){
        int output = value1 + value2;
        return output;
    }
}
class OOPsDemo{
    public static void main(String args[]){
        int num1 = 5;
        int num2 = 6;
        Calculator obj = new Calculator(); //Constructor
        int result = obj.add(num1, num2);
        System.out.println(result);
    }
}