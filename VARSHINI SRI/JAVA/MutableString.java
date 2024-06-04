class MutableString{
    public static void main(String args[]){
        StringBuffer sb = new StringBuffer("Aspire");
        sb.append(" Systems");
        sb.insert(0,"Varshini ");
        System.out.println(sb);
    }
}