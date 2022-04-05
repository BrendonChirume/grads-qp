import * as React from 'react';
import PropTypes from 'prop-types';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/system';
import { styled } from '@mui/material';
import RouterLink from '../RouterLink';

export default function ListTree({ node }) {
  const [open, setOpen] = React.useState(false);
  const nodeKeys = Object.keys(node);

  const subheader = nodeKeys[0];

  const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    fontSize: theme.typography.body1,
    '& span': {
      fontWeight: theme.typography.fontWeightMedium,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%'
    }
  }));

  const ListItemRow = ({ label, isChild, onClick, openValue, href }) => (
    <ListItemButton
      href={href}
      component={RouterLink}
      {...(!isChild && { onClick })}
      sx={{ color: 'text.secondary', ml: isChild ? 0 : -1, pl: isChild ? 4 : 1 }}
    >
      {!isChild &&
        (openValue === open ? (
          <KeyboardArrowDownIcon fontSize="small" />
        ) : (
          <NavigateNextIcon fontSize="small" />
        ))}
      <FolderIcon sx={{ mx: 1 }} />

      <StyledListItemText primary={label} />
    </ListItemButton>
  );

  ListItemRow.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    isChild: PropTypes.bool,
    openValue: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };

  const ChildList = React.memo(function ChildList({ sublist, href }) {
    return (
      <List dense component="div" disablePadding>
        {sublist.map((label) => {
          const newhref = `${href}/${label}`.replace(' ', '-');

          return (
            <ListItemRow
              key={label}
              isChild
              openValue={label}
              href={newhref}
              onClick={() => setOpen((prev) => prev !== label && label)}
              label={label}
            />
          );
        })}
      </List>
    );
  });

  ChildList.propTypes = {
    sublist: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string.isRequired
  };

  return (
    <List
      dense
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }}
      component="nav"
      subheader={
        <ListSubheader component="div" sx={{ pl: 1 }}>
          {subheader}
        </ListSubheader>
      }
    >
      {node[nodeKeys[0]].map(({ name, children }) => {
        const href = `/${name.replace(' ', '-')}`;

        return (
          <Box key={href}>
            <ListItemRow
              href={href}
              onClick={() => setOpen((prev) => prev !== name && name)}
              openValue={name}
              label={name}
            />
            <Collapse in={name === open} timeout="auto" unmountOnExit>
              <ChildList href={href} sublist={children} />
            </Collapse>
          </Box>
        );
      })}
    </List>
  );
}

ListTree.propTypes = {
  node: PropTypes.shape({}).isRequired
};
