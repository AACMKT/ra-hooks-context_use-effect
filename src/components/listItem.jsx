export const ListItem = (props) => {
    const { name, id, setActiveRow, cls } = props;
    
    return <li id = { id } className= { cls } onClick = { (e) => setActiveRow(e) }>{ name }</li>

}