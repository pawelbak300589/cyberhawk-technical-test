import React from 'react';
import { Link } from "react-router-dom";
import { styled, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledListItem = styled(ListItem)`
  border: 1px solid #eeeeee;
  margin-bottom: 5px;
  transition: background 300ms ease-in-out;
  :hover {
    background: #eeeeee;
  }
`;

const CustomListItem = ({ Icon, title, subtitle, link }) => {
  return (
    <StyledListItem
      secondaryAction={
        link ? <IconButton edge="end" aria-label="show" component={Link} to={link}>
          <ArrowForwardIosIcon />
        </IconButton> : <></>
      }>
      <ListItemAvatar>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
    </StyledListItem>
  );
};

export default CustomListItem;