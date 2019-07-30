export default theme => {
  return {
    root: {
      borderBottom: `1px solid ${theme.palette.border}`,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      alignItems: 'center',
      height: theme.size.topBar.height + 'px',
      zIndex: theme.zIndex.appBar
    },
    toolbar: {
      minHeight: 'auto',
      width: '100%'
    },
    title: {
      marginLeft: theme.spacing(1),
      color: theme.palette.getContrastText(theme.palette.background.default)
    },
    menuButton: {
      marginLeft: '-4px'
    },
    notificationsButton: {
      marginLeft: 'auto',
      color: theme.palette.text.secondary
    },
    signOutButton: {
      marginLeft: theme.spacing(1),
      color: theme.palette.text.secondary
    }
  }
};
