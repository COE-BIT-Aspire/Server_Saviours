class Student{
    String name;
    int marks;
}

class ArrayOfObjects{
    public static void main(String args[]){
        Student s1 = new Student();
        s1.name = "Abinaya";
        s1.marks = 95;

        Student s2 = new Student();
        s2.name = "Dharshini";
        s2.marks = 97;

        Student s3 = new Student();
        s3.name = "Varshini";
        s3.marks = 100;

        Student students[] = new Student[3];
        students[0] = s1;
        students[1] = s2;
        students[2] = s3;

        for(int i=0; i<students.length; i++){
            System.out.println(students[i].name + " : " + students[i].marks);
        }
    }
}