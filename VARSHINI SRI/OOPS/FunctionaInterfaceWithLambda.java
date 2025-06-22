@FunctionalInterface
interface A{
    void show(int i);
}

public class FunctionaInterfaceWithLambda {
    public static void main(String[] args) {
        A obj = (int i) -> System.out.println("Lucky number is " + i); //Lambda Expression
        //A obj = i -> System.out.println("Lucky number is " + i);
        obj.show(6);
    }
}
