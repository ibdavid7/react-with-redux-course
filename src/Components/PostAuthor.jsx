import { useSelector } from "react-redux";
import { selectAllAuthors } from "../Store";


const PostAuthor = ({ authorId }) => {
    const authors = useSelector(selectAllAuthors)

    const author = authors.find(author => author.userId === authorId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor;