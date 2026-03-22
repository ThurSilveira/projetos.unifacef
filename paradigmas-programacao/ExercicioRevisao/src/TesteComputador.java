public class TesteComputador {
    public static void main(String[] args) {

        Computador pc = new Computador(1, "Apple", "Apple Silicon", "M2", 3.5);

        System.out.println("Computador criado:");
        System.out.println(pc);

        // composição / ao perder referência do computador, perde o processador também
        pc = null;

        System.out.println("\nComputador foi removido da memória (processador também).");
    }
}