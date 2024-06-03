class MultidimensionArrays{
    public static void main(String args[]){
        String technologies[][] = {{"Python","Machine Learning","Deep Learning","NLP","AI"},{"Angular","React JS","Node JS","Express JS","Mongo DB"}};
        for(int outer=0; outer<2; outer++){
            for(int inner=0; inner<5; inner++){
                System.out.print(technologies[outer][inner] + " ");
            }
            System.out.println();
        }
    }
}