import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetDemo {

    public static void main(String args[]) {
        Set<Object> set = new TreeSet<>();

        set.add(4); 
        set.add(1); 
        set.add(3); 
        set.add(5); 
        set.add(2); 

        System.out.println(set); 

        Iterator<Object> it = set.iterator();
        
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}