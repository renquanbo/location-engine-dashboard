import AssessmentIcon from '@mui/icons-material/Assessment';
import PieChartIcon from '@mui/icons-material/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import LayersIcon from '@mui/icons-material/Layers';
import RouterIcon from '@mui/icons-material/Router';
import DockIcon from '@mui/icons-material/Dock';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TodayIcon from '@mui/icons-material/Today';
import ArticleIcon from '@mui/icons-material/Article';

export const menuItems = [
  {
    subHeader: "general",
    items: [
      {
        text: "Overview",
        icon: <AssessmentIcon />,
        link: ""
      },
      {
        text: "Analytics",
        icon: <PieChartIcon />,
        link: "analytics"
      },
      {
        text: "Account",
        icon: <PersonIcon />,
        link: "account"
      }]
  },
  {
    subHeader: "management",
    items: [
      {
        text: "Layers",
        icon: <LayersIcon />,
        link: "layers"
      },
      {
        text: "Anchors",
        icon: <RouterIcon />,
        link: "anchors"
      },
      {
        text: "Tags",
        icon: <DockIcon />,
        link: "tags"
      }]
  },
  {
    subHeader: "lab",
    items: [
      {
        text: "Todo List",
        icon: <ListAltIcon />,
        link: "todoList"
      },
      {
        text: "Calendar",
        icon: <TodayIcon />,
        link: "calendar"
      },
      {
        text: "Blogs",
        icon: <ArticleIcon />,
        link: "blogs"
      }
    ]
  }
]

export function getSelectedKey(pathname: string): string {
  const values = pathname.split('/');
  if (values.length < 3) {
    return '';
  } else {
    return values[2];
  }
}