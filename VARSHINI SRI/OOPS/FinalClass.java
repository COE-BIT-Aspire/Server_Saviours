final class Calc{
    public final void show(){
        System.out.println("In Calc Show");
    }
    public void add(int a, int b){
        System.out.println(a+b);
    }
}

class AdvCalc extends Calc{
    public void show(){
        System.out.println("In AdvCalc Show");
    }
}

public class FinalClass {
    public static void main(String[] args) {
        Calc obj = new Calc();
        obj.show();
        obj.add(4, 5);
    }
}
