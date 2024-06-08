class Mobile{
    String brand;
    int price;
    static String name;

    static{
        name = "Phone";
        System.out.println("In Static Block");
    }

    public Mobile(){
        brand = "";
        price = 100000;
        System.out.println("In Constructor");
    }

    public void show(){
        System.out.println(brand + " : " + price + " : " + name);
    }
}

public class StaticBlock {
    public static void main(String args[]) throws ClassNotFoundException{
        Class.forName("Mobile");
        //Mobile obj1 = new Mobile();
        //obj1.brand = "Apple";
        //obj1.price = 100000;
        //Mobile.name = "Smartphone";

        //Mobile obj2 = new Mobile();
    }
}
