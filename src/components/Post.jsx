import classes from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({id , author, body}) {
  return (
    <div className={classes.post}>
      <li>
        <Link to={id} >
          <p className={classes.author}>{author}</p>
          <p className={classes.text}>{body}</p>
        </Link>
      </li>
    </div>
  );
}

export default Post;
