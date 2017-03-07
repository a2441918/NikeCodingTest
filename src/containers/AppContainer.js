import { connect } from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state) => ({
  addingUser: state.main.addingUser,
});


export default connect(mapStateToProps)(App);
