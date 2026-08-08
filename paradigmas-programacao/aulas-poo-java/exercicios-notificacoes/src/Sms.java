public class Sms extends Notifications{
    private String numTelefone;

    public Sms() {
        super();
    }
    public Sms(String destinatario, String mensagem, String numTelefone) {
        super(destinatario, mensagem);
        this.numTelefone = numTelefone;
    }

    public void enviar(){
        System.out.println("Enviando SMS para o número: " +
                numTelefone + ":" + mensagem);

    }

    public String getNumTelefone() {
        return numTelefone;
    }
    public void setNumTelefone(String numTelefone) {
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
