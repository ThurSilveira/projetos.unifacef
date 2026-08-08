package dc.unifacef.ExemploMemoria.service;

import dc.unifacef.ExemploMemoria.model.Produto;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ProdutoServiceTests {

    @Test
    void deveExecutarOCicloDeVidaDeUmProduto() {
        ProdutoService service = new ProdutoService();
        Produto criado = service.criar(new Produto(null, "Caderno", 20, 5));

        assertEquals(1L, criado.getId());
        assertEquals(1, service.listar().size());

        Produto atualizado = service.atualizar(
                criado.getId(),
                new Produto(null, "Caderno grande", 25, 3)
        );

        assertEquals(criado.getId(), atualizado.getId());
        assertEquals("Caderno grande", service.listar().getFirst().getNome());
        assertTrue(service.remover(criado.getId()));
        assertFalse(service.remover(criado.getId()));
    }

    @Test
    void naoDeveAtualizarProdutoInexistente() {
        Produto novo = new Produto(null, "Caneta", 5, 10);

        assertNull(new ProdutoService().atualizar(99L, novo));
        assertNull(novo.getId());
    }
}
