public class Veiculo {
    private String marca;
    private String modelo;
    private float velocidade;

    public Veiculo(String marca, String modelo, float velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    public String getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public String getModelo() { return modelo; }
    public void setModelo(String modelo) { this.modelo = modelo; }

    public float getVelocidade() { return velocidade; }
    public void setVelocidade(float velocidade) { this.velocidade = velocidade; }

    public void mover() {
        System.out.println("Veículo se movendo...");
    }

    public void abastecer() {
        System.out.println("Veículo reabastecendo...");
    }

    @Override
    public String toString() {
        return "Veiculo [Marca: " + marca + ", Modelo: " + modelo + ", Velocidade: " + velocidade + " km/h]";
    }
}