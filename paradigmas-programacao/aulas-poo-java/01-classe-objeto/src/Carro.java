public class Carro {
    public String marca, modelo;
    public float velocidade;
    public boolean motor;

    public Carro(String marca, String modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
        this.motor = false;
    }

    public void ligar(){
        if (!this.motor){
            this.motor = true;
            System.out.println("Carro Ligado");
        }
    }

    public void desligar(){
        if (this.motor){
            this.motor = false;
            this.velocidade = 0;
            System.out.println("Carro Desligado");
        }
    }

    public void acelerar(float x){
        if (!this.motor){
            System.out.println("Motor desligado");
            return;
        }
        if (x <= 0) {
            System.out.println("Valor inválido");
            return;
        }
        this.velocidade += x;
        System.out.println("Velocidade atual: " + this.velocidade);
    }

    public void frear(float x){
        if (!this.motor){
            System.out.println("Motor desligado");
            return;
        }
        if (x <= 0) {
            System.out.println("Valor inválido");
            return;
        }
        this.velocidade = Math.max(0, this.velocidade - x);
        System.out.println("Velocidade atual: " + this.velocidade);
    }

    @Override
    public String toString(){
        return "Marca: " + this.marca
                + ", Modelo: " + this.modelo
                + ", Vel: " + this.velocidade
                + ", Motor: " + (this.motor ? "ligado" : "desligado");
    }
}
