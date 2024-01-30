const TemplateExpress = () => {
    const name = 'Express';
    const data = {
        tipoDado: 'Objeto',
        tamanho: 2,
    }
    return (
        <div>
            {/* Dado Dinamico */}
            <h2>Esse é o meu componente com dado dinâmico: {name}</h2>
            <h2>Assim que pego valor de um objeto: {data.tipoDado}</h2>
        </div>
    );
};

export default TemplateExpress;
