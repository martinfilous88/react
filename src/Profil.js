function Profil (props) {
    return (
        <div className="profil">
            <img src={props.img}></img>
            <div id="profilove_informace">
                <h1>{props.jmeno} {props.prijmeni}</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Věk</th>
                            <td>{props.vek}</td>
                            <th>Město</th>
                            <td>{props.mesto}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Profil;