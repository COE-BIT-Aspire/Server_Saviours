import java.util.LinkedList;
import java.util.ListIterator;

public class LinkedListDemo {
    public static void main(String args[]) {
        LinkedList<Object> list = new LinkedList<>();

        list.add(1);
        list.add(3.0f);
        list.add(null);
        list.add("Aspire");

        System.out.println(list);

        ListIterator<Object> it = list.listIterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }

        // Reset iterator to the end for previous iteration
        while (it.hasPrevious()) {
            System.out.println(it.previous());
        }
    }
}