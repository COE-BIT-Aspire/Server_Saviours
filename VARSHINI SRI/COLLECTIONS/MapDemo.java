import java.util.HashMap;
import java.util.Map;

public class MapDemo {

    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();

        map.put("0", "India");
        map.put("+91", "India");
        map.put("64", "Australia");
        map.put("64", "Aus"); // This will overwrite the previous value for "64"

        // Printing key set, values, and entry set
        System.out.println("Keys: " + map.keySet());
        System.out.println("Values: " + map.values());
        System.out.println("Entries: " + map.entrySet());
    }
}
