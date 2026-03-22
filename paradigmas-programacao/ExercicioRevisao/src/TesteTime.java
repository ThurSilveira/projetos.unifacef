public class TesteTime {
    public static void main(String[] args) {

        Atleta a1 = new Atleta(1, "Arthur", "Armador");
        Atleta a2 = new Atleta(2, "Daniel", "Pivô");

        Time time = new Time(1, "Franca Basquete", "Helinho");

        time.contratarAtleta(a1);
        time.contratarAtleta(a2);

        System.out.println("Time criado:");
        System.out.println(time);

        time = null; // anulando o time

        // provando que atletas continuam existindo
        System.out.println("\nAtletas ainda existem:");
        System.out.println(a1);
        System.out.println(a2);
    }
}