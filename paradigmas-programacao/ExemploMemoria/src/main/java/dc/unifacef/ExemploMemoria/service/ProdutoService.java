package dc.unifacef.ExemploMemoria.service;
import dc.unifacef.ExemploMemoria.model.Produto;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class ProdutoService {
    // Vetor de Produtos
    ArrayList<Produto> produtos = new ArrayList<>();
    public ArrayList<Produto> listar(){
        return this.produtos;
    }

   // Contador
    private long contador = 1;

    // Metodo criar
    public Produto criar(Produto produto) {
        produto.setId(contador);
        contador++;
        this.produtos.add(produto);
        return produto;
    }
}
