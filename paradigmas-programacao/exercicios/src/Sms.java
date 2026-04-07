public class Sms extends Notifications{
    private int numTelefone;

    public Sms() {
        super();
    }
    public Sms(String destinatario, String mensagem, int numTelefone) {
        super(destinatario, mensagem);
        this.numTelefone = numTelefone;
    }

    public void enviar(){
        System.out.println("Enviando SMS para o número: " +
                numTelefone + ":" + mensagem);

    }

    public int getNumTelefone() {
        return numTelefone;
    }
    public void setNumTelefone(int numTelefone) {
        this.numTelefone = numTelefone;
    }

    @Override
    public String toString() {
        return "Sms{" +
                super.toString() +
                "numTelefone=" + numTelefone +
                '}';
    }
}
