export default theme => {
  // const backgroundColorDefault =
  // theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.grey[900];
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    logoWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '63px',
      flexShrink: 0
    },
    logoLink: {
      fontSize: 0
    },
    bcdLogo: {
      display: 'inline-block',
      width: '221px',
      height: '25px',
      background: 'url(\'images/logos/bcd-logo-blue.svg\') no-repeat center center'
    },
    logoImage: {
      cursor: 'pointer'
    },
    logoDivider: {
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.divider
    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      width: '100px',
      height: '100px'
    },
    nameText: {
      marginTop: theme.spacing(2)
    },
    bioText: {},
    profileDivider: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    listSubheader: {
      color: theme.palette.text.secondary
    },
    listItem: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        borderRadius: '4px',
        '& $listItemIcon': {
          color: theme.palette.primary.main,
          marginLeft: '-4px'
        }
      },
      '& + &': {
        marginTop: theme.spacing(1)
      }
    },
    activeListItem: {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      backgroundColor: theme.palette.primary.light,
      '& $listItemText': {
        color: theme.palette.getContrastText(theme.palette.background.default)
      },
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    },
    listItemIcon: {
      marginRight: 0,
      color: theme.palette.text.secondary
    },
    listItemText: {
      fontWeight: 500,
      color: theme.palette.text.secondary
    },
    listDivider: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  }
};
