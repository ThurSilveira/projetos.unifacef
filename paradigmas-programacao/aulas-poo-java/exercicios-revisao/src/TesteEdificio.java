public class TesteEdificio {
    public static void main(String[] args) {

        Edificio edificio = new Edificio("Ecoville", "Av, São Vicente");

        edificio.construirApartamento(101, 1);
        edificio.construirApartamento(102, 1);
        edificio.construirApartamento(201, 2);

        System.out.println("Edifício:");
        System.out.println(edificio);

        edificio = null;

        System.out.println("\nEdifício removido da memória (apartamentos também).");
    }
}
