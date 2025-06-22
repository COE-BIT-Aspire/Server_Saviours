import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HashSetDemo {

    public static void main(String args[]) {
        Set<Object> set = new HashSet<>();

        set.add(1); // Adds an Integer
        set.add(3.0f); // Adds a Float
        set.add(null); // Adds null
        set.add(null); // Adding null again has no effect

        System.out.println(set); 

        Iterator<Object> it = set.iterator();
        
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}