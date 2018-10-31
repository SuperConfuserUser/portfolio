import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import About from './About'
import ContactFormContainer from './contact/ContactFormContainer'
import ProjectsContainer from './projects/ProjectsContainer'
import AdminRoute from './admin/AdminRoute'
import AdminContainer from './admin/AdminContainer'
import Login from './admin/Login'
import NavBarContainer from './nav/NavBarContainer'
import Footer from './Footer'
// import { toast } from 'materialize-css'

class App extends Component {

  // handleToast = event => {
  //   toast({html: event.target.attributes.data.value })
  // }

  render() {
    const { admin } = this.props

    return(      
      <Router>
        <div className='app'>
          <div className='hero'>
            <span>n_n</span>
          </div>
          <div className='content'>
            {/* <button className='btn' data='imma toast!' onClick={this.handleToast}>Toasty!</button> */}

            <NavBarContainer admin={admin}/>

            <main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={ContactFormContainer} />
                <Route path='/projects' render={(props) =>
                  <ProjectsContainer {...props} admin={admin} />} 
                />
                <Route path='/login' render={() => 
                  <Login admin={admin} />}
                />
                <AdminRoute path='/admin' component={AdminContainer} admin={admin} />
              </Switch>
            </main>
    
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ admin }) => ({ admin })

export default connect(mapStateToProps)(App)