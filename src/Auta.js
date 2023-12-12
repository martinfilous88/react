function ukazAuto() {
    window.alert("Auto ");
}

function ukazInfo(nazevAuta) {
    window.alert("Auto " + nazevAuta );
}

function Auto(props) {
    return (
        <div className="auto" onClick={() => ukazInfo(props.title)}>
            <br></br>
            <img src={props.image}></img>
            <div id="profilove_informace">
                <h1>{props.title}</h1>
                <table>
                    <tbody>
                        <tr>
                            
                            <th>Název:</th>
                            <td>{props.title}</td>
                        </tr>
                        <tr>
                            <th>Třída:</th>
                            <td>{props.class}</td>
                        </tr>
                        <tr>
                            <th>Produkce:</th>
                            <td>{props.start_production}</td>
                            
                            <br></br>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Auto;