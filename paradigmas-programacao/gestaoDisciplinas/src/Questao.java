public class Questao {
    private int numero;
    private float valor;
    private String enunciado;

    public Questao() {
    }

    public Questao(int numero, float valor, String enunciado) {
        this.numero = numero;
        this.valor = valor;
        this.enunciado = enunciado;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    @Override
    public String toString() {
        return "Questao{" +
                "numero=" + numero +
                ", valor=" + valor +
                ", enunciado='" + enunciado + '\'' +
                '}';
    }
}
