import java.util.ArrayList;
import java.util.ListIterator;

public class ArrayListDemo {
    public static void main(String args[]) {
        ArrayList<Object> list = new ArrayList<>();

        list.add(1);
        list.add(3.0f);
        list.add(null);
        list.add("Aspire");

        System.out.println(list);

        ListIterator<Object> it = list.listIterator();

        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
