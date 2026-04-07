import java.util.ArrayList;

public class TestaNot {
    public static void main(String[] args){
        ArrayList<Notifications> canais = new ArrayList<Notifications>();

        canais.add(new Email("Carlos", "Welcome", "Bem-Vindo"));
        canais.add(new Sms("Mariane", "Volta vida", 1699120309));
        canais.add(new WhatsApp("Araki ", " Alerta severo de chuva na regiao"));

        for(Notifications mensagem: canais){
            mensagem.enviar();
        }
    }
}
