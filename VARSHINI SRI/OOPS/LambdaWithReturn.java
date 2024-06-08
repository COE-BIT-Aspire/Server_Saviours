@FunctionalInterface
interface A{
    int add(int i, int j);
}

public class LambdaWithReturn {
    public static void main(String[] args) {
        A obj = (i,j) -> i+j;

        int result = obj.add(12,6);
        System.out.println(result);
    }
}
