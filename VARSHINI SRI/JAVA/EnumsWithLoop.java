enum Status{
    Running, Failed, Pending, Success; //objects or named constants
}

public class EnumsWithLoop {
    public static void main(String[] args) {
        Status[] ss = Status.values();
        for(Status s: ss){
            System.out.println(s + " : " + s.ordinal());
        }
    }
}
