class Calculator{
    public int add(int n1, int n2){
        return n1 + n2;
    }
    public int add(int n1, int n2, int n3){
        return n1 + n2 + n3;
    }
}

class MethodOverloading{
    public static void main(String args[]){
        Calculator obj = new Calculator();
        int add2 = obj.add(6,6);
        System.out.println(add2);
        int add3 = obj.add(6,6,6);
        System.out.println(add3);
    }
}