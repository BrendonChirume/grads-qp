import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';

const data = [
  {
    name: 'Year 1',
    children: [
      {
        name: 'Semester 1',
        children: [
          { name: 'Linear Algebra' },
          { name: 'Calculas' },
          { name: 'Infomation Management' },
          { name: 'Communication Skills' },
          { name: 'Electronic Commerce' },
          { name: 'Database Systems' }
        ]
      },
      {
        name: 'Semester 2',
        children: [
          { name: 'Descrete Mathematics' },
          { name: 'Data Mining' },
          { name: 'Introduction to Programming Consepts in Python' },
          { name: 'Business Information Systems' },
          { name: 'Applied Statistics' },
          { name: 'Data Visualisation' }
        ]
      }
    ]
  },
  {
    name: 'Year 2',
    children: [
      {
        name: 'Semester 1',
        children: [
          { name: 'Technopreneureship' },
          { name: 'Research Methods' },
          { name: 'Data Analysis & Simulation' },
          { name: 'Statistical Programming' },
          { name: 'Application Development' },
          { name: 'Data Communication & Network}' }
        ]
      },
      {
        name: 'Semester 2',
        children: [
          { name: 'Decision Support Systems' },
          { name: 'Parallel & Distributed Processing' },
          { name: 'Data Science Project' },
          { name: 'Information Security & Auditing' },
          { name: 'Molecular Biology' },
          { name: 'Data Analytics' },
          { name: 'Group Project}' }
        ]
      }
    ]
  }
];

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)'
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit'
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2)
    }
  }
}));

function StyledTreeItem(props, ref) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired
};

const renderTree = ({ name, children }, rootID, path = ['']) => {
  return (
    <StyledTreeItem
      path={path}
      underline="none"
      key={rootID}
      nodeId={`${rootID}`}
      labelText={name}
      labelIcon={FolderIcon}
    >
      {Array.isArray(children)
        ? children.map((node, childID) =>
            renderTree(node, `${rootID}.${childID}`, `${path}/${node.name}`)
          )
        : null}
    </StyledTreeItem>
  );
};

export default function PaperTreeView() {
  const { push } = useRouter();
  const handleSelect = ({ currentTarget }, nodeIds) => {
    const path = `/${currentTarget.parentNode
      .getAttribute('path')
      .replace(/ /g, '-')}`;
    console.log(path);
    push(path);
  };

  return (
    <TreeView
      defaultCollapseIcon={<KeyboardArrowDownIcon fontSize="small" />}
      defaultExpandIcon={<NavigateNextIcon fontSize="small" />}
      onNodeSelect={handleSelect}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', height: '100%' }}
    >
      {data.map((node, index) => renderTree(node, index, node.name))}
    </TreeView>
  );
}

PaperTreeView.propTypes = {};
