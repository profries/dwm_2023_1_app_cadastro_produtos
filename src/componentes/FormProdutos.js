import {useState} from "react";
import API from "../service/API";

export default function FormProdutos() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);    

    const cadastrarProduto = (event) => {
        event.preventDefault();
        API.post("/produtos", {
            nome: nome,
            preco: parseFloat(preco),
            imagem: "/res/pedigree.jpg"
        }).then((response) => {
            alert("Produto cadastrado com sucesso!");
            console.log(response.data);
            setNome("");
            setPreco(0);
        }).catch((err) => console.log(err));
    }

    return (
        <form onSubmit = {cadastrarProduto}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" 
                id="nome"
                name="nome"
                value={nome}
                onChange={(ev) => setNome(ev.target.value)}>
            </input>                
            <br />
            <label htmlFor="preco">Preço:</label>
            <input type="number" 
                id="preco"
                name="preco"
                value={preco}
                onChange={(ev) => setPreco(ev.target.value)}>
            </input>
            <br />
            <input type="submit"></input>
        </form>
    )
}
