import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/auth';
import './App.css';
import { fetchGetProfile } from './redux/profile/actions';
import { PostPage, PostsPage } from './pages/posts';
import { RootState } from './redux/rootReducer';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.profile.user);

  React.useEffect(() => {
    dispatch(fetchGetProfile());
  }, []);

  return (
    <div>
      <Switch>
        {!currentUser ? (
          <Route exact path="/" component={LoginPage} />
        ) : (
          <>
            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/posts/:id" component={PostPage} />
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
