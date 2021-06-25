import React, {useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setUser} from './store/userReducer'
import {Switch, Route, useHistory} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MoviesContainer from './containers/MoviesContainer/MoviesContainer'
import SingleMovieContainer from './containers/SingleMovieContainer/SingleMovieContainer'
import UserProfileContainer from './containers/UserProfileContainer/UserProfileContainer'
import UsersContainer from './containers/UsersContainer/UsersContainer'
import RegisterContainer from './containers/RegisterContainer/RegisterContainer'
import LoginContainer from './containers/LoginContainer/LoginContainer'
import HomeContainer from './containers/HomeContainer/HomeContainer'

function App() {
    let history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        axios
          .get("/api/auth/me")
          .then((res) => res.data)
          .then((user) => {
            dispatch(setUser(user))
          })
          .catch((err) => {
            history.push("/")
          });
          
      }, [dispatch]);

    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/movies/:id" component={SingleMovieContainer} />
                <Route path="/movies" exact component={MoviesContainer} />
                <Route path="/favs" exact component={MoviesContainer} />
                <Route path="/users" exact component={UsersContainer} />
                <Route path="/users/:id" component={UserProfileContainer} />
                <Route path="/signup" exact component={RegisterContainer} />
                <Route path="/signin" exact component={LoginContainer} />
                <Route path="/" component={HomeContainer} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default App
