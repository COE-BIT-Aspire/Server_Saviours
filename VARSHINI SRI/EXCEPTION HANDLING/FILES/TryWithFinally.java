import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TryWithFinally {
    public static void main(String[] args) throws NumberFormatException, IOException {
        int productId;
        BufferedReader br = null;
        try{
            br = new BufferedReader(new InputStreamReader(System.in));
            productId = Integer.parseInt(br.readLine());
            System.out.println(productId);
        }
        finally{
            br.close();
        }
    }
}
