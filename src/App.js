import ThemeWrapper from './components/ThemeWrapper'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {themeType: state.themeType};
}

const App = connect(mapStateToProps)(ThemeWrapper);

export default App;
