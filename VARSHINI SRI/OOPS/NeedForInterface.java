interface Computer{
    void code();
}

class Laptop implements Computer{
    public void code(){
        System.out.println("Code, Compile, Run");
    }
}

class Desktop implements Computer{
    public void code(){
        System.out.println("Code, Compile, Run : Faster");
    }
}

class Developer{
    public void devApp(Computer lap){
        lap.code();
    }
}

public class NeedForInterface {
    public static void main(String[] args) {
        Computer lap = new Laptop();
        Computer desk = new Desktop();

        Developer Varshini = new Developer();
        Varshini.devApp(desk);
        Varshini.devApp(lap);
    }
}
