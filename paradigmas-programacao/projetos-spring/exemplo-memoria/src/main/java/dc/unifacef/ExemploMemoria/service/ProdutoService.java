package dc.unifacef.ExemploMemoria.service;

import dc.unifacef.ExemploMemoria.model.Produto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProdutoService {
    private final ArrayList<Produto> produtos = new ArrayList<>();
    private long proximoId = 1;

    public ArrayList<Produto> listar() {
        return new ArrayList<>(produtos);
    }

    public Produto criar(Produto produto) {
        produto.setId(proximoId++);
        produtos.add(produto);
        return produto;
    }

    public boolean remover(Long id) {
        return produtos.removeIf(p -> p.getId().equals(id));
    }

    public Produto atualizar(Long id, Produto novo) {
        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).getId().equals(id)) {
                novo.setId(id);
                produtos.set(i, novo);
                return novo;
            }
        }
        return null;
    }
}
