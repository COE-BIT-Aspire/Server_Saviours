class Calc{
    public int add(int n1, int n2){
        return n1 + n2;
    }
    public int sub(int n1, int n2){
        return n1 - n2;
    }
}

class AdvCalc extends Calc{
    public int multi(int n1, int n2){
        return n1 * n2;
    }
    public int div(int n1, int n2){
        return n1 / n2;
    }
}

class ScientificCalc extends AdvCalc{
    public double power(int n1, int n2){
        return Math.pow(n1, n2);
    }
}

public class Inheritance {
    public static void main(String args[]){
        ScientificCalc obj = new ScientificCalc();
        int r1 = obj.add(12, 6);
        int r2 = obj.sub(12, 6);
        int r3 = obj.multi(12, 6);
        int r4 = obj.div(12,6);
        double r5 = obj.power(2,3);

        System.out.println(r1 + " " + r2 + " " + r3 + " " + r4 + " " + r5);
    }
}
