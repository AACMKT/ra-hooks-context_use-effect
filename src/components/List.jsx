
import { ListItem } from "./listItem";

export const List = (props) => {
    const { users, setActiveRow, userId } = props;
    return (
        <ul className="list-group user-list y mandatory-scroll-snapping">
            { users.map(el => {
                return (
                    <ListItem 
                    key = { el.id }
                    id = { el.id }
                    name = { el.name }
                    setActiveRow = { setActiveRow }
                    cls = {Number(el.id) === Number(userId) ? "list-group-item active" : "list-group-item"} />
                )

            }) }
        </ul>
    )
}