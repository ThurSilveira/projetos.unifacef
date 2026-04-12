public class TermostatoSmart implements DispositivoLigavel, SensorTemperatura {
    private boolean ligado;
    private double temperaturaAtual;

    public TermostatoSmart() {
        this.ligado = false;
        this.temperaturaAtual = 22.5; // valor padrão
    }

    public boolean isLigado() {
        return ligado;
    }

    public void setTemperaturaAtual(double temperaturaAtual) {
        this.temperaturaAtual = temperaturaAtual;
    }

    public double getTemperaturaAtual() {
        return temperaturaAtual;
    }

    @Override
    public void ligar() {
        ligado = true;
        System.out.println("Termostato ligado.");
    }

    @Override
    public void desligar() {
        ligado = false;
        System.out.println("Termostato desligado.");
    }

    @Override
    public double lerTemperatura() {
        if (ligado) {
            temperaturaAtual = 20.0 + (Math.random() * 5.0);
            System.out.printf("Temperatura atual: %.1f°C\n", temperaturaAtual);
            return temperaturaAtual;
        } else {
            System.out.println("Termostato desligado. Não é possível ler temperatura.");
            return Double.NaN;
        }
    }

    @Override
    public String toString() {
        return "TermostatoSmart{" +
                "ligado=" + ligado +
                ", temperaturaAtual=" + String.format("%.1f", temperaturaAtual) +
                '}';
    }
}