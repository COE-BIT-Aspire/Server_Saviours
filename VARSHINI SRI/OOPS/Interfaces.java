interface A{
    String area = "Bangalore";
    void show();
    void config();
}

interface X{
    void run();
}

interface Y extends X{

}

class B implements A,Y{
    public void show(){
        System.out.println("In Show");
    }

    public void config(){
        System.out.println("In Config");
    }

    public void run(){
        System.out.println("Running ...");
    }
}

public class Interfaces {
    public static void main(String[] args) {
        A obj;
        obj = new B();
        obj.show();
        obj.config();

        X obj1 = new B();
        obj1.run();

        //A.area = "Chennai";
        System.out.println(A.area);
    }
}
