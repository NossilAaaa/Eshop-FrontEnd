/*
import { useContext, useState } from 'react';
import CategoriaContext from './CategoriaContext';
import Alerta from '../../comuns/Alerta';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CampoEntrada from '../../comuns/CampoEntrada';

<CampoEntrada value={objeto.nome}
id="txtNome" name="nome" label="Nome"
tipo="text" onchange={handleChange}
msgvalido="OK certo" msginvalido="Informe o nome"
requerido={true} readonly={false}
maxCaracteres={40}/>

function Formulario() {
    const { objeto, handleChange, acaoCadastrar,
        alerta, exibirForm, setExibirForm } = useContext(CategoriaContext);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        if (form.checkValidity() === true) {
            acaoCadastrar(event);
        }
    };

    return (
        <Modal show={exibirForm} onHide={() => setExibirForm(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Categorias</Modal.Title>
            </Modal.Header>
            <Form id='formulario' onSubmit={handleSubmit} noValidate
                validated={validated}>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Alerta alerta={alerta} />
                            <Col xs={12} md={12}>
                                <FloatingLabel
                                    controlId="txtCodigo" label="Código"
                                    className="mb-3">
                                    <Form.Control type="number" readOnly
                                        name="codigo" value={objeto.codigo}
                                        onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={12}>
                                <FloatingLabel
                                    controlId="txtNome" label="Nome"
                                    className="mb-3">
                                    <Form.Control type="text" required
                                        name="nome" value={objeto.nome}
                                        onChange={handleChange}
                                        placeholder="Informe o nome" />
                                        <Form.Control.Feedback type='invalid'>
                                            Informe o Nome
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback >
                                            Campo Nome OK
                                        </Form.Control.Feedback>                                        
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => setExibirForm(false)}>
                        Fechar
                    </Button>
                    <Button variant="success" type="submit">
                        Salvar <i className='bi bi-save'></i>
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}
*/

import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import ProdutoContext from './ProdutoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import Dialogo from '../../comuns/Dialogo';
import CampoSelect from '../../comuns/CampoSelect';
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaCategorias } = useContext(ProdutoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Produto"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={4}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={8}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntradaTextArea value={objeto.descricao}
                    id="txtDescricao" name="descricao" label="Desrição"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a descrição"
                    requerido={false} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.quantidade_estoque}
                    id="txtEstoque" name="quantidade_estoque" label="Estoque"
                    tipo="number" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a quantidade em estoque"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.valor}
                    id="txtValor" name="valor" label="Valor"
                    tipo="number" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o valor"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoEntrada value={objeto.data_cadastro}
                    id="txtDataCadastro" name="data_cadastro" label="Data de cadastro"
                    tipo="date" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a data de cadastro"
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={6}>
                <CampoSelect value={objeto.ativo}
                    id="txtAtivo" name="ativo" label="Ativo"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe se está ativo"
                    requerido={true}>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                </CampoSelect>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.categoria}
                    id="txtCategoria" name="categoria" label="Categoria"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a categoria"
                    requerido={true}>
                    {listaCategorias.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario;