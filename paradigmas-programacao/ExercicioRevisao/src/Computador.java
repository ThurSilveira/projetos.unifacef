public class Computador {
    private int id;
    private String marca;
    private Processador processador;

    public Computador(int id, String marca, String marcaProc, String modeloProc, double freqProc) {
        this.id = id;
        this.marca = marca;
        this.processador = new Processador(marcaProc, modeloProc, freqProc); // composição / objeto criado dentro
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public Processador getProcessador() { return processador; }

    @Override
    public String toString() {
        return "Computador{" +
                "id=" + id +
                ", marca='" + marca + '\'' +
                ", processador=" + processador +
                '}';
    }
}