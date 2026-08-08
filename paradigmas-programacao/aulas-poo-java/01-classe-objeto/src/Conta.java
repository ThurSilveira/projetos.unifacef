public class Conta {

    public int numeroConta;
    public int agencia;
    public String nomeCliente;
    public float saldo;
    public boolean status;

    public Conta(int numeroConta, int agencia, String nomeCliente){
        this.numeroConta = numeroConta;
        this.agencia = agencia;
        this.nomeCliente = nomeCliente;
        this.saldo = 0.0f;
        this.status = true;
    }

    public void depositar(float valor){
        if (!this.status){
            System.out.println("Você não pode depositar em uma conta inativa!");
            return;
        }
        if (valor <= 0){
            System.out.println("Valor inválido");
            return;
        }
        this.saldo += valor;
        System.out.println("Você depositou " + valor +
                ", Saldo atual: " + this.saldo);
    }

    public void sacar(float valor){
        if (!this.status){
            System.out.println("Conta inativa!");
            return;
        }
        if (this.saldo < valor){
            System.out.println("Saldo insuficiente");
            return;
        }
        if (valor <= 0){
            System.out.println("Valor inválido");
            return;
        }
        this.saldo -= valor;
        System.out.println("Você sacou " + valor +
                ", saldo atual " + this.saldo);
    }

    public void encerrarConta(){
        if (!this.status){
            System.out.println("Conta já está encerrada!");
            return;
        }
        if (this.saldo > 0){
            System.out.println("Você ainda possui saldo em conta, retire e tente novamente!");
            return;
        }
        this.status = false;
        System.out.println("Conta encerrada!");
    }

    @Override
    public String toString(){
        return  "Número da conta: " + this.numeroConta +
                "\nAgencia: " + this.agencia +
                "\nCliente: " + this.nomeCliente +
                "\nSaldo atual: " + this.saldo +
                "\nStatus da conta: " + this.status;
    }
}
