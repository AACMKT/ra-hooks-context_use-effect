import spinner from '../assets/spinner300.svg';

export const Card = (props) => {
    const { data } = props;
    if (data.id > 0) {
        return(
            <div className="card" style={ {width: "18rem", padding: 0} }>
                <img src= { data.avatar } className="card-img-top" style = { {backgroundImage: `url(${ spinner })`, backgroundPosition: "center", height: "300px", backgroundColor: "#888" } } alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{ data.name }</h5>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">{ `City: ${data.details.city}` }</li>
                <li className="list-group-item">{ `Company: ${data.details.company}` }</li>
                <li className="list-group-item">{ `Position: ${data.details.position}` }</li>
                </ul>
            </div>
        )
    }
    return <div style={ {width: "300px"} }></div>


}