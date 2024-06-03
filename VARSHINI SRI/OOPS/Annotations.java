class A{
    public void showTheDataWhichBelongToThisClass(){
        System.out.println("In A Show");
    }
}

class B extends A{
    @Override
    public void showTheDataWhichBelongToThisClass(){
        System.out.println("In B Show");
    }
}

public class Annotations {
    public static void main(String[] args) {
        B obj = new B();
        obj.showTheDataWhichBelongToThisClass();
    }
}
