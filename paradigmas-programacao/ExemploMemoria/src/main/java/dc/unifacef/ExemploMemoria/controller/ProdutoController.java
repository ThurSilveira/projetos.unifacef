package dc.unifacef.ExemploMemoria.controller;
import dc.unifacef.ExemploMemoria.model.Produto;
import dc.unifacef.ExemploMemoria.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;

@RestController // classe responsavel por controlar requisição
@RequestMapping("/produto")
public class ProdutoController {

    // Injeção de dependência = permite chamar métodos com objetos não instanciados
    @Autowired
    ProdutoService service;

    // Requisição pelo verbo GET
    @GetMapping
    public ResponseEntity<ArrayList<Produto>> listar(){
        // Retorna OK para o cliente e lista de produtos
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping
    public ResponseEntity criar(@RequestBody Produto produto){
        Produto novo = service.criar(produto);
        URI uri = URI.create("/produto/" + novo.getId());
        return ResponseEntity.created(uri).body(novo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remove(@PathVariable Long id){
        if (service.remove(id)){
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Produto> atualiza(@PathVariable Long id, @RequestBody Produto novo){
        Produto resposta = service.atualiza(id, novo);
        return (resposta != null) ? ResponseEntity.ok(resposta) : ResponseEntity.notFound().build();
    }

}
