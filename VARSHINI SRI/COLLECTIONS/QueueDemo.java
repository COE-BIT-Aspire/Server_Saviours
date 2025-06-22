import java.util.Queue;
import java.util.LinkedList;

class QueueDemo{
    public static void main(String[] args) {

        Queue<Integer> numbers = new LinkedList<>();

        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(3);

        System.out.println(numbers);

        // Dequeue

        int removenumber = numbers.poll();
        System.out.println(removenumber);
    }
}