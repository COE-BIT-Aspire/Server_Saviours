class Human{
    private int age;
    private String name;

    public Human(){ //Default constructor
        age = 23;
        name = "Ezhil";
    }

    public Human(int age, String name){ //Parameterized constructor
        this.age = age;
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}

public class Constructor {
    public static void main(String args[]){
        Human obj = new Human();
        Human obj1 = new Human(22,"Varshini");
        //obj.setAge(22);
        //obj.setName("Varshini");
        System.out.println(obj.getName() + " : " + obj.getAge());
        System.out.println(obj1.getName() + " : " + obj1.getAge());
    }
}
