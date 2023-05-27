import {useState} from "react";
import API from "../service/API";

export default function FormProdutos() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);    

    const cadastrarProduto = (event) => {
        event.preventDefault();
        API.post("/produtos", {
            nome: nome,
            preco: preco
        }).then((response) => {
            alert("Produto cadastrado com sucesso!");
            console.log(response.data);
            setNome("");
            setPreco(0);
        }).catch((err) => console.log(err));
    }

    return (
        <form onSubmit = {cadastrarProduto}>
            <label for="nome">Nome:</label>
            <input type="text" 
                name="nome"
                value={nome}
                onChange={(ev) => setNome(ev.target.value)}>
            </input>                
            <br />
            <label for="preco">Preço:</label>
            <input type="number" 
                name="preco"
                value={preco}
                onChange={(ev) => setPreco(ev.target.value)}>
            </input>
            <br />
            <input type="submit"></input>
        </form>
    )
}
