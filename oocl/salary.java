private static Long findSalaryByGender(Company company, String gender) {
    Long totalSalary = 0L;
    for (Department department: company.getDepartments()) { 
        for (Employee employee : department.getEmployees()) {
            if (employee.getGender().equals(gender)) {
                totalSalary = totalSalary + employee.getSalary();
            }
        }
    }
    return totalSalary;
}

String foundPerson(String[] people){
    for (int i=0 ; i < people.length; i++) {
        if (people[i].equals("Cedric")){
            return "Cedric";
        }
        if (people[i].equals("Don")){
            return "Don";
        }
        if (people[i].equals("Kent")){
            return "Kent";
        }
    } 
    return "";
}


// Online Java Compiler
// Use this editor to write, compile and run your Java code online

int num = 10;
for (int i = 1; i <= num; i++){
    if (((i % 5) != 0) && ((i % 7) != 0)){
        System.out.println("fizzbuzz");
    }
    else if ((i % 5) != 0){
        System.out.println("fizz");
    }
    else if ((i % 7) != 0) {
        System.out.println("buzz");
    }
        
    else{
        System.out.println(i);
    }
}

class Test {
    static void display(){
        System.out.println("You can pass the exam");
    }
}

class Demo {
    public static void main(String... args){
        Test t = null;
        t.display();
    }
}

for (int i = 5; i >= 0; i--) {
    int alphabet = 65;
    for (int j = 0; j <= i; j++) {
        System.out.print((char) (alphabet + j) + " ");
    }
    System.out.println();
}

for (int i = 0; i <= 5; i++) {
    int alphabet = 65;
    for (int j = 0; j <= i; j++) {
        System.out.print((char) (alphabet + j) + " ");
    }
    System.out.println();
}