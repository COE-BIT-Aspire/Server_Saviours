class Computer{
    public void playMusic(){
        System.out.println("Music playing ...");
    }
    public String getMePen(int cost){
        return "Pen";
    }
}

class Methods{
    public static void main(String args[]){
        Computer obj = new Computer();
        obj.playMusic();
        String res = obj.getMePen(30);
        System.out.println(res);
    }
}