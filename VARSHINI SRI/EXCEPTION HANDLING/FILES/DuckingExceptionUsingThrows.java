class A{
    public void show() throws ClassNotFoundException{
        Class.forName("Library");
    }
}

public class DuckingExceptionUsingThrows {
    public static void main(String[] args) {
        A obj = new A();
        try{
            obj.show();
        }
        catch(ClassNotFoundException e){
            System.out.println(e);
        }
    }
}
