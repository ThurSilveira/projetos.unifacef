public class TestarDrone {

    public static void main(String[] args) {

        Drone d1 = new Drone("DR1", 0, 80);

        System.out.println(d1);

        d1.decolar();
        System.out.println(d1);

        d1.subir(100);
        System.out.println(d1);

        d1.descer(5);
        System.out.println(d1);

        d1.pousar();
        System.out.println(d1);
    }
}