import { connect } from 'react-redux'
import ToggleThemeSwitch from './ToggleThemeSwitch'



function mapStateToProps (state) {
  return {themeType: state.themeType};
}

const ToggleTheme = connect(mapStateToProps)(ToggleThemeSwitch);

export default ToggleTheme;




